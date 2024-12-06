import React, { useContext, useState } from "react"
import { Button, Form, InputGroup } from "react-bootstrap"
import { ParkingContext } from "../context/ParkingContext"
import { park } from "../api/parking"
import { ActionEnum } from "../enum/ActionEnum"

const ParkingControls = () => {
  const { dispatch } = useContext(ParkingContext)
  const [licenseNumber, setLicenseNumber] = useState("")
  const [strategy, setStrategy] = useState("")

  const handlePark = async () => {
    if (!licenseNumber || !strategy) {
      alert("Please enter license number and select a strategy")
      return
    }

    try {
      const requestBody = {
        plateNumber: licenseNumber,
        strategyIndex: strategy,
      }

      const response = await park(requestBody)
      dispatch({ type: ActionEnum.PARK, payload: response.data })
      setLicenseNumber("")
      setStrategy("")
    } catch (error) {
      console.error("Failed to park the car", error)
    }
  }

  return (
    <>
      <InputGroup className="mb-3">
        <Form.Control
          placeholder="Enter license number"
          aria-label="License number"
          aria-describedby="basic-addon2"
          value={licenseNumber}
          onChange={(e) => setLicenseNumber(e.target.value)}
        />
        <Form.Select
          value={strategy}
          onChange={(e) => setStrategy(e.target.value)}
        >
          <option>Select Strategy</option>
          <option value={0}>Standard</option>
          <option value={1}>Smart</option>
          <option value={2}>Super Smart</option>
        </Form.Select>
        <Button className="px-4" variant="outline-primary" id="button-addon2" onClick={handlePark}>
          Park
        </Button>
        <Button className="px-4" variant="outline-secondary" id="button-addon2">
          Fetch
        </Button>
      </InputGroup>
    </>
  )
}

export default ParkingControls
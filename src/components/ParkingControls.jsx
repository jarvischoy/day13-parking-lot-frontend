import React, { useContext, useState } from "react"
import { Button, Form, InputGroup } from "react-bootstrap"
import { ParkingContext } from "../context/ParkingContext"
import { park, fetchCar } from "../api/parking"
import { ActionEnum } from "../enum/ActionEnum"

const ParkingControls = () => {
  const { state, dispatch } = useContext(ParkingContext)
  const [licenseNumber, setLicenseNumber] = useState("")
  const [strategy, setStrategy] = useState("")

  const validateLicensePlate = (plate) => {
    const regex = /^[A-Z]{2}-\d{4}$/
    return regex.test(plate)
  }

  const isPlateNumberParked = (plate) => {
    return state.some(parkingLot =>
      parkingLot.tickets.some(ticket => ticket.plateNumber === plate)
    )
  }

  const handlePark = async () => {
    if (!licenseNumber || !strategy) {
      alert("Please enter license number and select a strategy")
      return
    }

    if (!validateLicensePlate(licenseNumber)) {
      alert("Invalid license plate format. Please enter in the format: AB-1234")
      return
    }

    if (isPlateNumberParked(licenseNumber)) {
      alert("This car is already parked")
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

  const handleFetch = async () => {
    if (!licenseNumber) {
      alert("Please enter license number")
      return
    }

    if (!validateLicensePlate(licenseNumber)) {
      alert("Invalid license plate format. Please enter in the format: AB-1234")
      return
    }

    if (!isPlateNumberParked(licenseNumber)) {
      alert("This car is not parked")
      return
    }

    try {
      const requestBody = {
        plateNumber: licenseNumber,
        position: 3, // Replace with the actual position
        parkingLot: 1, // Replace with the actual parking lot ID
      }

      const response = await fetchCar(requestBody)
      dispatch({ type: ActionEnum.FETCH, payload: response.data })
      setLicenseNumber("")
    } catch (error) {
      console.error("Failed to fetch the car", error)
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
        <Button className="px-4" variant="outline-secondary" id="button-addon2" onClick={handleFetch}>
          Fetch
        </Button>
      </InputGroup>
    </>
  )
}

export default ParkingControls
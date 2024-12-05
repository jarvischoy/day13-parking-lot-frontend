import React from "react"
import { Button, Dropdown, DropdownButton, Form, InputGroup } from "react-bootstrap"

const ParkingControls = () => {
  return (
    <>
      <InputGroup className="mb-3">
        <Form.Control
          placeholder="Enter license number"
          aria-label="License number"
          aria-describedby="basic-addon2"
        />
        <Form.Select>
          <option>Select Strategy</option>
          <option value={1}>Standard</option>
          <option value={2}>Smart</option>
          <option value={3}>Super Smart</option>
        </Form.Select>
        <Button className="px-4" variant="outline-primary" id="button-addon2" >
          Park
        </Button>
        <Button className="px-4" variant="outline-secondary" id="button-addon2" >
          Fetch
        </Button>
      </InputGroup>
    </>
  )
}

export default ParkingControls
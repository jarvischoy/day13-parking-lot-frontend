// src/components/Parking.jsx
import React, { useContext, useEffect } from 'react'
import ParkingLot from './ParkingLot'
import { Col, Container, Row } from 'react-bootstrap'
import ParkingControls from './ParkingControls'
import { ParkingContext } from '../context/ParkingContext'
import { ActionEnum } from '../enum/ActionEnum'
import { getParkingLots } from '../api/parking'

const Parking = () => {
  const { state, dispatch } = useContext(ParkingContext)

  const onLoad = async () => {
    try {
      const response = await getParkingLots()
      console.log("response", response.data)
      dispatch({ type: ActionEnum.LOAD, payload: response.data })
    } catch (error) {
      console.error("Failed to load parking", error)
    }
  }

  useEffect(() => {
    onLoad()
  }, [])

  return (
    <Container className='p-2'>
      <ParkingControls />
      <Row>
        {state.map(parkingLot => (
          <Col key={parkingLot.id}>
            <ParkingLot
              name={parkingLot.name}
              capacity={parkingLot.capacity}
              tickets={parkingLot.tickets}
            />
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default Parking
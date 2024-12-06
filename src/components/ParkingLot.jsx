// src/components/ParkingLot.jsx
import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import styles from './ParkingLot.module.scss'

const ParkingLot = ({ name, capacity, tickets = [] }) => {
  const slots = Array.from({ length: capacity }, (_, i) => i + 1)

  return (
    <Card>
      <Card.Header>{name}</Card.Header>
      <Card.Body>
        <Card.Title>Capacity: {capacity}</Card.Title>
        <Card.Text>Available Capacity: {capacity - tickets.length}</Card.Text>
        <Container>
          {slots.map((slot, index) => (
            <Row key={index}>
              {slots.slice(index * 3, index * 3 + 3).map((slot) => {
                const ticket = tickets.find(ticket => ticket.position === slot)
                return (
                  <Col key={slot} className="border p-0">
                    {
                      ticket ?
                        <div className={styles.parkedItem}>{ticket.plateNumber}</div> :
                        <div className={styles.emptyItem}>Slot {slot}</div>
                    }
                  </Col>
                )
              })}
            </Row>
          ))}
        </Container>
      </Card.Body>
    </Card>
  )
}

export default ParkingLot
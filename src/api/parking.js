import client from "./client"

export const getParkingLots = () => {
  return client.get("/parking-lot")
}

export const park = (car) => {
  return client.post("/parking-lot/park", car)
}

export const fetch = (ticket) => {
  return client.post("/parking-lot/fetch", ticket)
}

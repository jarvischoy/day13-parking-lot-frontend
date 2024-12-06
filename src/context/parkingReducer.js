import { ActionEnum } from "../enum/ActionEnum"

export const initialState = []

export const parkingReducer = (state, action) => {
  switch (action.type) {
    case ActionEnum.LOAD:
      return action.payload
    case ActionEnum.PARK:
      return state.map((parkingLot) => {
        if (parkingLot.id === action.payload.parkingLot) {
          return {
            ...parkingLot,
            tickets: [...parkingLot.tickets, action.payload],
          }
        }
        return parkingLot
      })
    case ActionEnum.FETCH:
      return state.map((parkingLot) => {
        return {
          ...parkingLot,
          tickets: parkingLot.tickets.filter((ticket) => ticket.plateNumber !== action.payload.plateNumber),
        }
      })
    default:
      return state
  }
}

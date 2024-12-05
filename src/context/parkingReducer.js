import { ActionEnum } from "../enum/ActionEnum"

export const initialState = []

export const parkingReducer = (state, action) => {
  switch (action.type) {
    case ActionEnum.LOAD:
      return action.payload
    case ActionEnum.PARK:
      return [...state, action.payload]
    case ActionEnum.FETCH:
      return state.filter((parkingLot) => parkingLot.id !== action.payload)
    default:
      return state
  }
}

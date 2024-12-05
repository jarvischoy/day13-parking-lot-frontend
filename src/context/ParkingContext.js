import React, { createContext, useReducer } from "react"
import { initialState, parkingReducer } from "./parkingReducer"

export const ParkingContext = createContext()

export const ParkingContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(parkingReducer, initialState)

  return <ParkingContext.Provider value={{ state, dispatch }}>{children}</ParkingContext.Provider>
}

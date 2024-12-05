import "./App.scss"
import Parking from "./components/Parking"
import { ParkingContextProvider } from "./context/ParkingContext"

function App() {
  return (
    <div className="App">
      <ParkingContextProvider>
        <Parking />
      </ParkingContextProvider>
    </div>
  )
}

export default App

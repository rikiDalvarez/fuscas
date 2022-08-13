
import { Car } from "./Car";

export const CarsList = ({ cars }) => {
  return (
    cars.map((car, index) => <Car key={index} car={car} />)
  )
}

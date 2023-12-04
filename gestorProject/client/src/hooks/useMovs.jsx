import { useContext } from "react"
import { MovContex } from "../MovProvider"


export const useMovs = () => {
  const context = useContext(MovContex)

  return context
} 
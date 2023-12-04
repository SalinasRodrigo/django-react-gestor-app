/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import {ingresos, gastos} from "./mooks/info.json"

export const MovContex = createContext();


export function MovProvider ({children}) {
  const [ings, sentIngresos] = useState(ingresos);
  const [gast, setGastos] = useState(gastos)
  
  return (
    <MovContex.Provider value={{
      ings,
      sentIngresos,
      gast,
      setGastos
    }}>
      {children}
    </MovContex.Provider>
  )
}
/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";

export const MovContex = createContext();


export function MovProvider ({children}) {
  const [ings, setIngresos] = useState(null);
  const [gast, setGastos] = useState(null);

  const getGastos = () => {
    fetch('/api/gastos/')
      .then((res) => res.json())
      .then((response)=>{
        const mov = response
        setGastos(mov)
      })
  }

  const getIngresos = () => {
    fetch('/api/ingresos/')
      .then((res) => res.json())
      .then((response)=>{
        const mov = response
        setIngresos(mov)
      })
  }


  useEffect(() =>{
    getIngresos()
    getGastos()
  },[])

  return (
    <MovContex.Provider value={{
      ings,
      setIngresos,
      gast,
      setGastos
    }}>
      {children}
    </MovContex.Provider>
  )
}
/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";

export const MovContex = createContext();


export function MovProvider ({children}) {
  const [ings, setIngresos] = useState(null);
  const [gast, setGastos] = useState(null);

  const getGastos = () => {
    fetch('http://127.0.0.1:8000/api/gastos/')
      .then((res) => res.json())
      .then((response)=>{
        const mov = response
        setGastos(mov)
      })
  }

  const getIngresos = () => {
    fetch('http://127.0.0.1:8000/api/ingresos/')
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
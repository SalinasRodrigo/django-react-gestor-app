/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";

export const MovContex = createContext();

export function MovProvider({ children }) {
  const [ings, setIngresos] = useState(null);
  const [gast, setGastos] = useState(null);
  const [balance, setBalance] = useState(null);
  const [ingresoMensual, setIngresoMensual] = useState(null);
  const [gastoMensual, setGastoMensual] = useState(null);

  const getGastos = () => {
    fetch("/api/gastos/")
      .then((res) => res.json())
      .then((response) => {
        const mov = response;
        setGastos(mov);
      });
  };

  const getIngresos = () => {
    fetch("/api/ingresos/")
      .then((res) => res.json())
      .then((response) => {
        const mov = response;
        setIngresos(mov);
      });
  };

  const getBalance = () => {
    fetch("/api/balance/")
      .then((res) => res.json())
      .then((response) => {
        const mov = response;
        setBalance(mov);
      });
  };

  const getIngresoMensual = () => {
    fetch("/api/ingresos/year/")
      .then((res) => res.json())
      .then((response) => {
        const mov = response;
        console.log(mov)
        mov.forEach(element => {
          const fecha = new Date(element.month)
          const mes = fecha.toLocaleString('default', { month: 'short' }).toUpperCase(); 
          element.month = mes
        });
        setIngresoMensual(mov);
      });
  };

  const getGastoMensual = () => {
    fetch("/api/gastos/year/")
      .then((res) => res.json())
      .then((response) => {
        const mov = response;
        mov.forEach(element => {
          const fecha = new Date(element.month)
          const mes = fecha.toLocaleString('default', { month: 'short' }).toUpperCase(); 
          element.month = mes
        });
        setGastoMensual(mov);
      });
  };

  useEffect(() => {
    getIngresos();
    getGastos();
    getBalance();
  }, []);

  useEffect(()=>{
    getGastoMensual();
    getIngresoMensual();
  },[ings, gast])

  return (
    <MovContex.Provider
      value={{
        ings,
        setIngresos,
        gast,
        setGastos,
        balance,
        setBalance,
        ingresoMensual,
        setIngresoMensual,
        gastoMensual,
        setGastoMensual,
      }}
    >
      {children}
    </MovContex.Provider>
  );
}

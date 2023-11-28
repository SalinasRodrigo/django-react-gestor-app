import "./App.css";
import {Card} from "@tremor/react"
import {ingresos, gastos} from "./mooks/info.json"
import { MyTable } from "./components/MyTable";
import { MyChart } from "./components/MyChart";
import { MyDonut } from "./components/MyDonut";
import { useState } from "react";

function App() {
  const [ings, setIngresos] = useState(ingresos)
  const [gast, setGastos] = useState(gastos)
  return (
    <>
      <main>
        <MyTable head={['Fecha', 'Monto']} ings={ings} gast={gast}/>
        <Card className="dona1"><MyDonut /></Card>
        <Card className="formulario">
          <form>
            <label htmlFor="descripcion">Descripción</label>
            <input className="my-input" type="text" name="descripcion"  />
            <label htmlFor="monto">Monto</label>
            <input className="my-input" type="number" name="monto" />
            <label htmlFor="fecha">Fecha</label>
            <input className="my-input" type="date" name="fecha" id="" />
          </form>
        </Card>
        <MyChart chartdata={gastos}/>
      </main>
    </>
  );
}

export default App;

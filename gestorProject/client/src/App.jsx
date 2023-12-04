import "./App.css";
import {Card} from "@tremor/react"
import { MyTable } from "./components/MyTable";
import { MyChart } from "./components/MyChart";
import { MyDonut } from "./components/MyDonut";
import {MovProvider} from './MovProvider';

function App() {
  return (
    <MovProvider>
      <main>
        <MyTable head={['Fecha', 'Monto']}/>
        <Card className="dona1"><MyDonut /></Card>
        <Card className="formulario">
          <form>
            <label htmlFor="descripcion">Descripción</label>
            <input className="my-input" type="text" name="descripcion" required />
            <label htmlFor="monto">Monto</label>
            <input className="my-input" type="number" name="monto" required  />
            <label htmlFor="fecha">Fecha</label>
            <input className="my-input" type="date" name="fecha" id="" required  />
            <button type="submit">submit</button>
          </form>
        </Card>
        <MyChart />
      </main>
    </MovProvider>
  );
}

export default App;

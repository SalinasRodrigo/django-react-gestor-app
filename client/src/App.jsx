import "./App.css";
import {Card} from "@tremor/react"
import {ingresos, gastos} from "./mooks/info.json"
import { MyTable } from "./components/MyTable";
import { MyChart } from "./components/MyChart";
import { MyDonut } from "./components/MyDonut";

function App() {
  return (
    <>
      <main>
        <MyTable head={['Fecha', 'Monto']} data={ingresos}/>
        <Card className="dona1"><MyDonut /></Card>
        <Card className="dona2">Dona 2</Card>
        <MyChart chartdata={gastos}/>
      </main>
    </>
  );
}

export default App;

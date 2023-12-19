import "./App.css";
import { MyTable } from "./components/MyTable";
import { MyChart } from "./components/MyChart";
import { MyDonut } from "./components/MyDonut";
import {MovProvider} from './MovProvider';
import { MyForm } from "./components/MyForm";

function App() {
  return (
    <MovProvider>
      <main>
        <MyTable head={['Descripción','Fecha', 'Monto']}/>
        <MyDonut />
        <MyForm/>
        <MyChart />
      </main>
    </MovProvider>
  );
}

export default App;

import {
  Card,
  Tab,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels,
  Title,
} from "@tremor/react";
import { useMovs } from "../hooks/useMovs";

export const MyForm = () => {
  const {setIngresos, setGastos } = useMovs();

  const createMove = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    const newMov = Object.fromEntries(data);
    newMov.cantidad = parseInt(newMov.cantidad);

    fetch(`/api/create/`,{
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(newMov)
    })

    if (event.target.tipo.value == 1) {
      setIngresos((prevState) => [
        ...prevState,
        {
          ...newMov,
          id: prevState[prevState.length - 1].id + 1,
          tipo: 1,
        },
      ]);
    } else {
      setGastos((prevState) => [
        ...prevState,
        {
          ...newMov,
          id: prevState[prevState.length - 1].id + 1,
          tipo: 0,
        },
      ]);
    }
    event.target.reset();
  };

  return (
    <Card className="formulario">
      <TabGroup className="h-full form-tab">
        <TabList variant="solid" className="w-full p-2">
          <Title>Nuevo Movimiento</Title>
          <Tab>Ingresos</Tab>
          <Tab>Gastos</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <form onSubmit={createMove}>
              <label htmlFor="descripcion">Descripción</label>
              <input
                className="my-input"
                type="text"
                name="descripcion"
                required
              />
              <label htmlFor="cantidad">Cantidad</label>
              <input
                className="my-input"
                type="number"
                name="cantidad"
                required
              />
              <label htmlFor="fecha">Fecha</label>
              <input className="my-input" type="date" name="fecha" required />
              <input type="hidden" name="tipo" value={1} />
              <button type="submit" className="submit-btn">Guardar</button>
            </form>
          </TabPanel>
          <TabPanel>
            <form onSubmit={createMove}>
              <label htmlFor="descripcion">Descripción</label>
              <input
                className="my-input"
                type="text"
                name="descripcion"
                required
              />
              <label htmlFor="cantidad">Cantidad</label>
              <input
                className="my-input"
                type="number"
                name="cantidad"
                required
              />
              <label htmlFor="fecha">Fecha</label>
              <input className="my-input" type="date" name="fecha" required />
              <input type="hidden" name="tipo" value={0} />
              <button type="submit" className="submit-btn">Guardar</button>
            </form>
          </TabPanel>
        </TabPanels>
      </TabGroup>
    </Card>
  );
};

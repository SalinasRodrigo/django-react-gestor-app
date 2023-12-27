/* eslint-disable react/prop-types */
import { AreaChart, Card, Tab, TabGroup, TabList, TabPanel, TabPanels, Title } from "@tremor/react"
import { useMovs } from "../hooks/useMovs";


export const MyChart = () => {
  const {gastoMensual, ingresoMensual} = useMovs()

  const valueFormatter = function(number) {
    return "Gs. " + new Intl.NumberFormat("py").format(number).toString();
  };

  return(
    <Card className="chart">
      <TabGroup>
        <TabList>
          <Title>Movimientos mesuales</Title>
          <Tab>Gastos</Tab>
          <Tab>Ingresos</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            {gastoMensual ? 
            <AreaChart
              className="h-72"
              data={gastoMensual}
              index="month"
              colors={["red"]}
              categories={["cantidad"]}
              valueFormatter={valueFormatter}
            /> :
            <></>}
          </TabPanel>
          <TabPanel>
            {ingresoMensual ? 
              <AreaChart
                className="h-72"
                data={ingresoMensual}
                index="month"
                colors={["green"]}
                categories={["cantidad"]}
                valueFormatter={valueFormatter}
              /> :
            <></>}
          </TabPanel>
        </TabPanels>
      </TabGroup>
    </Card>
  )
}
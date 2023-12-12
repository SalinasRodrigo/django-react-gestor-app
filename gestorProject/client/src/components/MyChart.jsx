/* eslint-disable react/prop-types */
import { AreaChart, Card, Tab, TabGroup, TabList, TabPanel, TabPanels, Title } from "@tremor/react"
import { useMovs } from "../hooks/useMovs";


export const MyChart = () => {
  const {gast, ings} = useMovs()

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
            {gast ? 
            <AreaChart
              className="h-72"
              data={gast}
              index="fecha"
              colors={["red"]}
              categories={["cantidad"]}
              valueFormatter={valueFormatter}
            /> :
            <></>}
          </TabPanel>
          <TabPanel>
            {gast ? 
              <AreaChart
                className="h-72"
                data={ings}
                index="fecha"
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
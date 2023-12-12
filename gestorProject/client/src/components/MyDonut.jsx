import { Card, DonutChart, Tab, TabGroup, TabList, TabPanel, TabPanels } from "@tremor/react"
import { useMovs } from "../hooks/useMovs";

const valueFormatter = (number) => `Gs. ${new Intl.NumberFormat("py").format(number).toString()}`;

export const MyDonut = () => {
  const {gast, ings} = useMovs()
  return(
    <Card className="dona">
      <TabGroup className="donas-tab">
        <TabList>
          <Tab>Ingresos</Tab>
          <Tab>Gastos</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
              {ings ? 
              <DonutChart
                className="mt-20"
                data={ings}
                category="cantidad"
                index="descripcion"
                colors={["rose", "yellow", "orange", "indigo", "blue", "emerald"]}
                valueFormatter={valueFormatter}
              /> :
              <></>}
          </TabPanel>
          <TabPanel>
            {gast ? 
            <DonutChart
              className="mt-20"
              data={gast}
              category="cantidad"
              index="descripcion"
              colors={["rose", "yellow", "orange", "indigo", "blue", "emerald"]}
              valueFormatter={valueFormatter}
            /> :
            <></>}
          </TabPanel> 
        </TabPanels>
      </TabGroup>
    </Card>
  )
}
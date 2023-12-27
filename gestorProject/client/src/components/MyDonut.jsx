import { Card, DonutChart, Tab, TabGroup, TabList, TabPanel, TabPanels } from "@tremor/react"
import { useMovs } from "../hooks/useMovs";

const valueFormatter = (number) => `Gs. ${new Intl.NumberFormat("py").format(number).toString()}`;

export const MyDonut = () => {
  const {gast, ings, balance} = useMovs()

  const handleLabel = () => {
    return valueFormatter(balance[1].cantidad - balance[0].cantidad)
  }
  return(
    <Card className="dona">
      <TabGroup className="donas-tab">
        <TabList>
          <Tab>Ingresos</Tab>
          <Tab>Gastos</Tab>
          <Tab>Balance</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
              {ings ? 
              <DonutChart
                className="mt-20"
                data={ings}
                category="cantidad"
                index="descripcion"
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
              valueFormatter={valueFormatter}
            /> :
            <></>}
          </TabPanel>
          <TabPanel>
            {balance ? 
            <DonutChart
              className="mt-20"
              data={balance}
              category="cantidad"
              label={handleLabel()}
              index="tipo"
              colors={['red', 'green']}
              valueFormatter={valueFormatter}
            /> :
            <></>}
          </TabPanel>  
        </TabPanels>
      </TabGroup>
    </Card>
  )
}
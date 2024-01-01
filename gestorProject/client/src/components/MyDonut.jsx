import { Card, DonutChart, Tab, TabGroup, TabList, TabPanel, TabPanels, Title } from "@tremor/react"
import { useMovs } from "../hooks/useMovs";
import { useEffect, useState } from "react";

const valueFormatter = (number) => `Gs. ${new Intl.NumberFormat("py").format(number).toString()}`;

export const MyDonut = () => {
  const {gast, ings, balance} = useMovs()

  const [monthIngs, setMonthIngs] = useState(null)
  const [monthGast, setMonthGast] = useState(null)

  const filterMonth = () =>{
    if (ings && gast){
      const current = new Date()
      const newIngs = ings.filter((item)=>{
        const fecha = new Date (item.fecha)
        return (fecha.getMonth() == current.getMonth())
      })
      const newGast = gast.filter((item)=>{
        const fecha = new Date (item.fecha)
        return (fecha.getMonth() == current.getMonth())
      })
      setMonthIngs(newIngs)
      setMonthGast(newGast)
    }
  }

  useEffect(()=>{
    filterMonth()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ings,gast])

  const handleLabel = () => {
    return valueFormatter(balance[1].cantidad - balance[0].cantidad)
  }
  return(
    <Card className="dona">
      <TabGroup className="donas-tab">
        <TabList>
          <Title>Movs. del mes</Title>
          <Tab>Ingresos</Tab>
          <Tab>Gastos</Tab>
          <Tab>Balance</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
              {monthIngs ? 
              <DonutChart
                className="mt-20"
                data={monthIngs}
                category="cantidad"
                index="descripcion"
                valueFormatter={valueFormatter}
              /> :
              <></>}
          </TabPanel>
          <TabPanel>
            {monthGast ? 
            <DonutChart
              className="mt-20"
              data={monthGast}
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
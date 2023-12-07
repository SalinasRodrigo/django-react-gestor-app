/* eslint-disable react/prop-types */
import { AreaChart, Card, Title } from "@tremor/react"
import { useMovs } from "../hooks/useMovs";


export const MyChart = () => {
  const {gast, ings} = useMovs()

  const valueFormatter = function(number) {
    return "Gs. " + new Intl.NumberFormat("py").format(number).toString();
  };

  return(
    <Card className="chart">
      <Title>Gastos</Title>
      <AreaChart
        className="h-72 mt-4"
        data={gast}
        index="fecha"
        colors={["indigo"]}
        categories={["cantidad"]}
        valueFormatter={valueFormatter}
      />
    </Card>
  )
}
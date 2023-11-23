/* eslint-disable react/prop-types */
import { AreaChart, Card, Title } from "@tremor/react"


export const MyChart = ({chartdata}) => {


  const valueFormatter = function(number) {
    return "Gs. " + new Intl.NumberFormat("py").format(number).toString();
  };

  return(
    <Card className="chart">
      <Title>Gastos</Title>
      <AreaChart
        className="h-72 mt-4"
        data={chartdata}
        index="fecha"
        colors={["indigo"]}
        categories={["monto"]}
        valueFormatter={valueFormatter}
      />
    </Card>
  )
}
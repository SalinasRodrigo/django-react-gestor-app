import { Card, DonutChart, Title } from "@tremor/react"
import { useMovs } from "../hooks/useMovs";

const valueFormatter = (number) => `Gs. ${new Intl.NumberFormat("py").format(number).toString()}`;

export const MyDonut = () => {
  const {gast, ings} = useMovs()
  return(
    <>
      <DonutChart
        className="mt-6"
        data={gast}
        category="cantidad"
        index="descripcion"
        colors={["rose", "yellow", "orange", "indigo", "blue", "emerald"]}
        valueFormatter={valueFormatter}
      />
    </>
  )
}
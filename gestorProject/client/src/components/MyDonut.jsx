import { Card, DonutChart, Title } from "@tremor/react"

const cities = [
  {
    name: "New York",
    sales: 9800,
  },
  {
    name: "Noseque",
    sales: 1322,
  },
  {
    name: "Lootro",
    sales: 1398,
  },
  {
    name: "????",
    sales: 1298,
  },
  {
    name: "Zurich",
    sales: 3398,
  },
];

const valueFormatter = (number) => `Gs. ${new Intl.NumberFormat("py").format(number).toString()}`;

export const MyDonut = () => {
  return(
    <>
      <DonutChart
        className="mt-6"
        data={cities}
        category="sales"
        index="name"
        colors={["rose", "yellow", "orange", "indigo", "blue", "emerald"]}
        valueFormatter={valueFormatter}
      />
    </>
  )
}
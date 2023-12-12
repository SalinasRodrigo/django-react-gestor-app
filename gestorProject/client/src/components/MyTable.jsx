/* eslint-disable react/prop-types */
import {
  Table,
  TableHead,
  TableHeaderCell,
  TableBody,
  TableRow,
  TableCell,
  Card,
  TabGroup,
  TabList,
  Tab,
  TabPanel,
  TabPanels,
  Title,
} from "@tremor/react";
import { useMovs } from "../hooks/useMovs";

export const MyTable = ({head}) => {
  const {ings, gast} = useMovs()

  return(
    <Card className="tab">
      <TabGroup>
        <TabList>
          <Title>Mis movimientos</Title>
          <Tab>Ingresos</Tab>
          <Tab>Gastos</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Table>
              <TableHead>
                <TableRow>
                  {head.map((item)=>(
                    <TableHeaderCell key={item}>{item}</TableHeaderCell>
                  ))}
                </TableRow>
              </TableHead>
              {ings ? <TableBody>
                {ings.map((item)=>(
                  <TableRow key={item.id}>
                    <TableCell>
                      {item.fecha}
                    </TableCell>
                    <TableCell>
                      {item.cantidad}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>: <></>}
            </Table>
          </TabPanel>
          <TabPanel>
            <Table>
              <TableHead>
                <TableRow>
                  {head.map((item)=>(
                    <TableHeaderCell key={item}>{item}</TableHeaderCell>
                  ))}
                </TableRow>
              </TableHead>
              {gast ?<TableBody>
                {gast.map((item)=>(
                  <TableRow key={item.name}>
                    <TableCell>
                      {item.fecha}
                    </TableCell>
                    <TableCell>
                      {item.cantidad}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>:<></>}
            </Table>
          </TabPanel>
        </TabPanels>
      </TabGroup>
      
    </Card>
  )
}
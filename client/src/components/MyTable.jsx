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
} from "@tremor/react";

export const MyTable = ({head, ings, gast}) => {

  return(
    <Card className="tab">
      <TabGroup>
        <TabList>
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
              <TableBody>
                {ings.map((item)=>(
                  <TableRow key={item.name}>
                    <TableCell>
                      {item.fecha}
                    </TableCell>
                    <TableCell>
                      {item.monto}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
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
              <TableBody>
                {gast.map((item)=>(
                  <TableRow key={item.name}>
                    <TableCell>
                      {item.fecha}
                    </TableCell>
                    <TableCell>
                      {item.monto}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TabPanel>
        </TabPanels>
      </TabGroup>
      
    </Card>
  )
}
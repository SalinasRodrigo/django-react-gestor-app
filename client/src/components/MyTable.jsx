/* eslint-disable react/prop-types */
import {
  Table,
  TableHead,
  TableHeaderCell,
  TableBody,
  TableRow,
  TableCell,
  Card,
} from "@tremor/react";

export const MyTable = ({head, data}) => {

  return(
    <Card className="tabla">
      <Table>
        <TableHead>
          <TableRow>
            {head.map((item)=>(
              <TableHeaderCell key={item}>{item}</TableHeaderCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item)=>(
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
    </Card>
  )
}
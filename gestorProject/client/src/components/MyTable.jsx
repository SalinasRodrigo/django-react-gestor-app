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
import { TrashIcon } from "../icons/TrashIcon";
import { EditIcon } from "../icons/EditIcon";

export const MyTable = ({ head }) => {
  const { ings, setIngresos, gast, setGastos } = useMovs();

  const handleUpdate = (a) => {
    console.log(a);
  };

  const handleDelete = (id, tipo) => {
    fetch(`/api/delete/${id}/`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
      },
    });
    if (tipo == 1){
      setIngresos(prevState => prevState.filter(item => item.id != id))
    }else{
      setGastos(prevState => prevState.filter(item => item.id != id))
    }
  };

  return (
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
                  {head.map((item) => (
                    <TableHeaderCell key={item}>{item}</TableHeaderCell>
                  ))}
                </TableRow>
              </TableHead>
              {ings ? (
                <TableBody>
                  {ings.map((item) => (
                    <TableRow key={item.id}>
                      <TableCell>{item.fecha}</TableCell>
                      <TableCell>{item.cantidad}</TableCell>
                      <TableCell className="table-icons">
                        <button onClick={() => handleUpdate(item.id, item.tipo)}>
                          <EditIcon />
                        </button>
                        <button onClick={() => handleDelete(item.id, item.tipo)}>
                          <TrashIcon />
                        </button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              ) : (
                <></>
              )}
            </Table>
          </TabPanel>
          <TabPanel>
            <Table>
              <TableHead>
                <TableRow>
                  {head.map((item) => (
                    <TableHeaderCell key={item}>{item}</TableHeaderCell>
                  ))}
                </TableRow>
              </TableHead>
              {gast ? (
                <TableBody>
                  {gast.map((item) => (
                    <TableRow key={item.name}>
                      <TableCell>{item.fecha}</TableCell>
                      <TableCell>{item.cantidad}</TableCell>
                      <TableCell className="table-icons">
                        <button onClick={() => handleUpdate(item.id, item.tipo)}>
                          <EditIcon />
                        </button>
                        <button onClick={() => handleDelete(item.id, item.tipo)}>
                          <TrashIcon />
                        </button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              ) : (
                <></>
              )}
            </Table>
          </TabPanel>
        </TabPanels>
      </TabGroup>
    </Card>
  );
};

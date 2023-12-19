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
import { UpdateForm } from "./UpdateForm";

export const MyTable = ({ head }) => {
  const { ings, setIngresos, gast, setGastos } = useMovs();

  const handleShow = (id) => {
    const dialog = document.getElementById(id);
    dialog.showModal();
  };

  const handleDelete = (id, tipo) => {
    fetch(`/api/delete/${id}/`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
      },
    });
    if (tipo == 1) {
      setIngresos((prevState) => prevState.filter((item) => item.id != id));
    } else {
      setGastos((prevState) => prevState.filter((item) => item.id != id));
    }
    const dialog = document.getElementById(`delete-dialog-${id}`);
    dialog.close();
  };

  const handleClose = (id) => {
    const dialog = document.getElementById(id);
    dialog.close();
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
                    <TableRow key={item.name}>
                      <TableCell>{item.descripcion}</TableCell>
                      <TableCell>{item.fecha}</TableCell>
                      <TableCell>{item.cantidad}</TableCell>
                      <TableCell className="table-icons">
                        <button
                          onClick={() => handleShow(`update-dialog-${item.id}`)}
                        >
                          <EditIcon />
                        </button>
                        <dialog id={`update-dialog-${item.id}`}>
                          <button
                            onClick={() =>
                              handleClose(`update-dialog-${item.id}`)
                            }
                          >
                            Cerrar
                          </button>
                          <UpdateForm id={item.id} tipo={item.tipo} />
                        </dialog>
                        <button
                          onClick={() => handleShow(`delete-dialog-${item.id}`)}
                        >
                          <TrashIcon />
                        </button>
                        <dialog id={`delete-dialog-${item.id}`}>
                          <Card>
                            <Title>
                              Esta seguro que desea eliminar este movimiento?
                            </Title>
                            <div className="dialog-btns">
                              <button
                                className="delete-btn"
                                onClick={() => handleDelete(item.id, item.tipo)}
                              >
                                Eliminar
                              </button>
                              <button
                                className="cancel-btn"
                                onClick={() =>
                                  handleClose(`delete-dialog-${item.id}`)
                                }
                              >
                                Cancelar
                              </button>
                            </div>
                          </Card>
                        </dialog>
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
                      <TableCell>{item.descripcion}</TableCell>
                      <TableCell>{item.fecha}</TableCell>
                      <TableCell>{item.cantidad}</TableCell>
                      <TableCell className="table-icons">
                        <button
                          onClick={() => handleShow(`update-dialog-${item.id}`)}
                        >
                          <EditIcon />
                        </button>
                        <dialog id={`update-dialog-${item.id}`}>
                          <button
                            className="close-btn"
                            onClick={() =>
                              handleClose(`update-dialog-${item.id}`)
                            }
                          >
                            x
                          </button>
                          <UpdateForm id={item.id} tipo={item.tipo} />
                        </dialog>
                        <button
                          onClick={() => handleShow(`delete-dialog-${item.id}`)}
                        >
                          <TrashIcon />
                        </button>
                        <dialog id={`delete-dialog-${item.id}`}>
                          <Card>
                            <Title>
                              Esta seguro que desea eliminar este movimiento?
                            </Title>
                            <div className="dialog-btns">
                              <button
                                className="delete-btn"
                                onClick={() => handleDelete(item.id, item.tipo)}
                              >
                                Eliminar
                              </button>
                              <button
                                className="cancel-btn"
                                onClick={() =>
                                  handleClose(`delete-dialog-${item.id}`)
                                }
                              >
                                Cancelar
                              </button>
                            </div>
                          </Card>
                        </dialog>
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

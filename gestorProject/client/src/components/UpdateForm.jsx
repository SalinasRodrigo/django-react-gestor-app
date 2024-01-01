/* eslint-disable react/prop-types */
import { Card, Title } from "@tremor/react";
import { useMovs } from "../hooks/useMovs";

export const UpdateForm = ({id, tipo}) => {
  const { ings, setIngresos, gast, setGastos } = useMovs();

  const updateMove = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    const newMov = Object.fromEntries(data);
    const dialog = document.getElementById(`update-dialog-${id}`)
    console.log(newMov.fecha)

    fetch(`/api/update/${id}/`,{
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(newMov)
    })

    if (tipo == 1){
      const stateIndex = ings.findIndex(item => item.id === id)
      const newState = [
        ...ings.slice(0, stateIndex),
        {...ings[stateIndex],
          descripcion: newMov.descripcion,
          cantidad: parseInt(newMov.cantidad),
          fecha: newMov.fecha
        },
        ...ings.slice(stateIndex+1)
      ]
      setIngresos(newState)
    }else{
      const stateIndex = gast.findIndex(item => item.id === id)
      const newState = [
        ...gast.slice(0, stateIndex),
        {...gast[stateIndex],
          descripcion: newMov.descripcion,
          cantidad: parseInt(newMov.cantidad),
          fecha: newMov.fecha
        },
        ...gast.slice(stateIndex+1)
      ]
      setGastos(newState)
    }

    dialog.close()
    event.target.reset();
  };

  const handleClose = () => {
    const dialog = document.getElementById(`update-dialog-${id}`);
    dialog.close();
  };

  return (
    <Card className="formulario update-form">
      <Title>Actualizar movimiento</Title>
      <form onSubmit={updateMove}>
        <label htmlFor="descripcion">Descripción</label>
        <input className="my-input" type="text" name="descripcion" required />
        <label htmlFor="cantidad">Cantidad</label>
        <input className="my-input" type="number" name="cantidad" required />
        <label htmlFor="fecha">Fecha</label>
        <input className="my-input" type="date" name="fecha" required />
        <input type="hidden" name="tipo" value={1} />
        <div className="dialog-btns">
          <button type="submit" className="submit-btn p-2">Guardar</button>
          <button onClick={handleClose} className="cancel-btn p-2">Cancelar</button>
        </div>    
      </form>
    </Card>
  );
};

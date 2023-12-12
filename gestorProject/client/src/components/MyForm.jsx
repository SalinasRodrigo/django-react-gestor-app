import { Card } from "@tremor/react"
import { useState } from "react"


export const MyForm = () => {

  const [mov, setMov] = useState(null)

  // const updateMove = () => {
  //   fetch(`/api/update/${id}/`,{
  //     method: 'PUT',
  //     headers: {
  //       'Content-type': 'application/json'
  //     },
  //     body: JSON.stringify(mov)
  //   })
  // }

  const createMove = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    const newMov = JSON.stringify(Object.fromEntries(data));
    setMov(newMov)
    fetch(`/api/create/`,{
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(newMov)
    })
    event.target.reset()
  }

  return(
    <Card className="formulario">
          <form onSubmit={createMove}>
            <label htmlFor="descripcion">Descripción</label>
            <input className="my-input" type="text" name="descripcion" required />
            <label htmlFor="cantidad">Cantidad</label>
            <input className="my-input" type="number" name="cantidad" required  />
            <label htmlFor="fecha">Fecha</label>
            <input className="my-input" type="date" name="fecha" required  />
            <button type="submit">submit</button>
          </form>
    </Card>
  )
}
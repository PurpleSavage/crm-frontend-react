import { objClientes } from "../types/typesClientes"
import { useNavigate,Form,redirect } from "react-router-dom"

import { eliminarCliente } from "../data/clientes"

export async function action({params}:{params:any}):Promise<Response>{
  await eliminarCliente(params.clienteId)
  return redirect('/')
}
const Cliente = ({cliente}:{cliente:objClientes}) => {
  const navigate=useNavigate()
  const {nombre,empresa,email,telefono,_id}=cliente
  return (
    <tr className="border-b">
      <td className="p-6 space-y-2">
        <p className="text-xl text-gray-800">{nombre}</p>
        <p >{empresa}</p>
      </td>
      <td className="p-6">
        <p className="text-gray-600">
          <span className="text-gray-800 uppercase font-bold">
            Email:{'  '}
          </span>
           {email} 
        </p>
        <p className="text-gray-600">
          <span className="text-gray-800 uppercase font-bold">
            Teléfono:{'  '}
          </span>
           {telefono} 
        </p>
      </td>
      <td className="flex p-6 gap-3">
        <button 
          type="button" 
          className="text-emerald-600 hover:text-emerald-700 font-bold text-xs"
          onClick={()=>navigate(`/clientes/${_id}/editar`)}
        >
          Editar
        </button>
        <Form 
          method="POST"
          action={`/clientes/${_id}/eliminar`}
          onSubmit={(e)=>{
            if(!confirm('¿Deseas eliminar este registro?')){
              e.preventDefault()
            }
          }}
        >
          <button 
            type="submit" 
            className="text-red-600 hover:text-red-700 font-bold text-xs"

          >
            Eliminar
          </button>
        </Form>
      </td>
    </tr>
  )
}

export default Cliente
import { useLoaderData } from "react-router-dom"
import Cliente from "../components/Cliente";
import { obtenerCLientes } from "../data/clientes";
import { objClientes } from "../types/typesClientes";
export function loader():Promise<objClientes[]>{
    const clientes = obtenerCLientes()
    return clientes
}
const Index = () => {
    const clientes=useLoaderData()  as objClientes[]
  return (
    <>
        <h1 className="font-black text-4xl text-emerald-900">Clientes</h1>
        <p className='mt-3'>Administra tus clientes</p>
        {clientes.length? 
            <table className="w-full bg-white shadow-sm mt-5 table-auto">
                <thead className="bg-emerald-800 text-white">
                    <tr>
                        <th className="p-2">Cliente</th>
                        <th className="p-2">Contacto</th>
                        <th className="p-2">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        clientes.map(cliente=>(
                            <Cliente 
                                cliente={cliente} 
                                key={cliente._id}
                            />
                        ))
                    }
                </tbody>
            </table>        
            :<p className="text-center mt-10">No hay clientes aún</p>
        }
    </>
  )
}

export default Index
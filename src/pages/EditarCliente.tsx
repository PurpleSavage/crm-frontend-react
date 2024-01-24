import { obtenerCLiente,actualizarCliente } from "../data/clientes"
import { objClientes } from "../types/typesClientes"
import { Form,useNavigate,useLoaderData,redirect, useActionData } from "react-router-dom"
import Error from "../components/Error"
import Formulario from "../components/Formulario"
export async function loader({params}:{params:any}):Promise<objClientes[]> {
  const cliente=await  obtenerCLiente(params.clienteId)
  if(Object.values(cliente).length==0){
    throw new Response('',{
      status:404,
      statusText:"No hay Resultados"
    })
  }
  return cliente
}
export async function action({request,params}:{request:Request,params:any}):Promise<string[]|Response> {
  const formData= await request.formData()
  const datos = Object.fromEntries(formData)
  const email =formData.get('email')
  const errors:string[]=[]
  if(Object.values(datos).includes('')){
    errors.push('Todos los campos son obligatorios')
    
  }
  let regex = new RegExp("([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])")
  if(email !==null && !regex.test(String(email))){
    errors.push('El email no es válido')
  }
  if(Object.values(errors).length){
    return errors
  }
  await actualizarCliente(params.clienteId,datos)
  return redirect('/')
}
const EditarCliente = () => {
  const navigate =useNavigate()
  const cliente = useLoaderData() as objClientes
  const errores=useActionData() as string[]
  return (
    <>
      <h1 className="font-black text-4xl text-emerald-900">Editar Cliente</h1>
      <p className='mt-3'>Podrás modificar tus clientes</p>
      <div className="flex justify-end">
        <button
          className="bg-emerald-800 text-white px-3 py-1 font-bold hover:bg-emerald-900"
          onClick={()=>navigate(-1)}
        >
          volver
        </button>
      </div>
      <div className="bg-white shadow-sm rounded-md md:w-3/4 mx-auto px-5 py-10">
        {errores?.length && errores.map((error,i)=>(
          <Error key={i}>{error}</Error>
        ))}
        <Form 
          method="POST"
          noValidate
        >
          <Formulario
            cliente={cliente}
          />
          <input 
            type="submit"  
            className="mt-5 w-full bg-emerald-800 p-3 font-bold text-white text-lg cursor-pointer hover:bg-emerald-900 "
            value='Guardar cambios'
          />
        </Form>
      </div>
    </>
  )
}

export default EditarCliente
import { useNavigate,Form, useActionData,redirect } from "react-router-dom"
import Formulario from "../components/Formulario"
import Error from "../components/Error"
import { agregarCliente } from "../data/clientes"


export async function action({request}:{request:Request}):Promise<string[]|Response>{
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
  await agregarCliente(datos)
  return redirect('/')
}

const NuevoCliente = () => {
  const errores =useActionData() as string[]
  const navigate=useNavigate()
  return (
    <>
      <h1 className="font-black text-4xl text-emerald-900">Nuevo Cliente</h1>
      <p className='mt-3'>Llena todos los campos para registrar un nuevo cliente</p>
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
          <Formulario/>
          <input 
            type="submit"  
            className="mt-5 w-full bg-emerald-800 cursor-pointer hover:bg-emerald-900 p-3 font-bold text-white text-lg"
            value='Registrar cliente'
          />
        </Form>
      </div>
    </>
  )
}

export default NuevoCliente
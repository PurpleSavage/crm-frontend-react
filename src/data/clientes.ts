import { objClientes } from "../types/typesClientes"
import { ClienteDataInterface } from "../types/typesClientes"

export async function obtenerCLientes():Promise<objClientes[]>{
    const url = `${import.meta.env.VITE_BACKEND_URL}/all-clients`
    const respuesta = await fetch(url)
    const resultado =await respuesta.json()
    return resultado
}
export async function obtenerCLiente(id:number):Promise<objClientes[]>{
    const url = `${import.meta.env.VITE_BACKEND_URL}/client/${id}`
    const respuesta = await fetch(url)
    const resultado =await respuesta.json()
    return resultado
}


export async function agregarCliente(datos:ClienteDataInterface) {
    const url = `${import.meta.env.VITE_BACKEND_URL}/add-client`
    try {
        const respuesta =await fetch(url,{
            method:'POST',
            body:JSON.stringify(datos),
            headers:{
                'Content-type':'application/json'
            }
        })
        await respuesta.json()
    } catch (error) {
        console.log(error)
    }
}
export async function actualizarCliente(id:number,datos:ClienteDataInterface){
    const url = `${import.meta.env.VITE_BACKEND_URL}/update-client/${id}`
    try {
        const respuesta =await fetch(url,{
            method:'PUT',
            body:JSON.stringify(datos),
            headers:{
                'Content-type':'application/json'
            }
        })
        await respuesta.json()
    } catch (error) {
        console.log(error) 
    }
}
export async function eliminarCliente(id:number){

 const url = `${import.meta.env.VITE_BACKEND_URL}/delete-client/${id}`
    try {
        const respuesta =await fetch(url,{
            method:'DELETE',
            
        })
        await respuesta.json()
    } catch (error) {
        console.log(error)
    }
}
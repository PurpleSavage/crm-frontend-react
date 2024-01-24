export type objClientes={
    _id?:string,
    nombre:string,
    telefono:number,
    email:string,
    empresa:string
    notas:string
}
export interface ClienteDataInterface {
    [key: string]: FormDataEntryValue;
}

  
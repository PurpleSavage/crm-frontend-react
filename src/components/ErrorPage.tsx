import { useRouteError} from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError() as  Error | Response  
  return (
    <div className="space-y-8">
      <h1 className="text-center text-5xl font-bold mt-20 text-emerald-800">CRM-Clientes</h1>
      <p className="text-center">Hubo un error</p>
      <p className="text-center">{error instanceof Error? error.message:error.statusText}</p>:
    </div>
  )
}
export default ErrorPage
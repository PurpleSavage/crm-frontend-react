
const Error = ({children}:{children:any}) => {
  return (
    <div className="text-center my-4 bg-red-600 p-3 font-bold text-white">
        {children}
    </div>
  )
}

export default Error
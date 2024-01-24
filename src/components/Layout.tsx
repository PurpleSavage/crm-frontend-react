import { Outlet,Link,useLocation } from "react-router-dom"

const Layout = () => {
 const location = useLocation()
  return (
    <aside className="md:flex md:min-h-screen">
        <div className="md:w-1/4 bg-emerald-900 px-5 py-10">
            <h2 className="text-3xl font-black text-center text-white">CRM-Clientes</h2>
            <nav className="mt-10">
                <Link 
                    className={`${location.pathname==='/'? 'text-emerald-300':'text-white'} text-xl block mt-2 hover:text-emerald-300`} 
                    to='/'
                >Clientes</Link>
                <Link 
                    className={`${location.pathname==='/clientes/nuevo'? 'text-emerald-300':'text-white'} text-xl block mt-2 hover:text-emerald-300`} 
                    to='/clientes/nuevo'
                >Nuevo Cliente</Link>
            </nav>
        </div>
        <main className="md:w-3/4 p-10 md:h-screen overflow-scroll">
            <Outlet/>
        </main>
    </aside>
  )
}

export default Layout
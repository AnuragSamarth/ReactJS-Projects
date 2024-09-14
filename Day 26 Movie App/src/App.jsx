import { Outlet } from "react-router-dom"
import Layout from "./components/Layout"
import { DataProvider } from "./context/DataContext"

function App() {
  return (
    <>
     <Layout>
       <Outlet/>
     </Layout>
    </>
  )
}

export default App

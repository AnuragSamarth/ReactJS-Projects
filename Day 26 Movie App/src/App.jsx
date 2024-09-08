import { Outlet } from "react-router-dom"
import Layout from "./components/Layout"
import Navbar from "./components/Navbar"

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

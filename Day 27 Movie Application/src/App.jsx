import { Outlet } from "react-router-dom";
import Layout from "./components/Layout";
import { ToastContainer, toast } from 'react-toastify';

function App() {
  return (
    <>
       <Layout>
         <Outlet />
       </Layout>
    </>
  )
}

export default App;
                              
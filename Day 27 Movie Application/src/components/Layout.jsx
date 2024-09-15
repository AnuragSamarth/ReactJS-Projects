import Footer from "./Footer/Footer";
import NavBar from "./NavBar/NavBar";

function Layout({children}){
    return (
        <>
        <NavBar/>
        <main>{children}</main>
        <Footer/>
        </>
    )
}

export default Layout;
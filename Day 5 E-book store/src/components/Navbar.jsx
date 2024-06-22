function Navbar(){
    return (
    <nav className="p-4 flex justify-evenly">
       <div>
        <h1 className="text-gray-800 hover:text-gray-950 text-2xl font-bold mr-10 cursor-pointer">A.J.S <span className=" font-semibold text-sm">e-book store</span></h1>
       </div>
       <div className="flex items-center space-x-4">
        <a href="" className=" text-gray-950 px-4 py-1 rounded border-2 border-gray-700 transition duration-950 hover:border-gray-500 cursor-pointer hover:text-gray-700">Login</a>
        <a href="" className=" text-gray-950 px-4 py-1 rounded border-2 border-gray-700 transition duration-950 hover:border-gray-500 cursor-pointer hover:text-gray-700 ">Create Account</a>
       </div>
    </nav>   
)
}

export default Navbar;
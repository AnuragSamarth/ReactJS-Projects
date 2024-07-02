function Buttons(){
    return (
        <>
        <div className="w-full text-center mt-5">
        <form>
            <button className="mr-5 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
            Submit
            </button> 
            <button className="bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white py-2 px-4 border border-green-500 hover:border-transparent rounded">
            Start Game
            </button>
        </form>
        </div>
        </>
    )
}

export default Buttons;
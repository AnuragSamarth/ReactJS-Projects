function Buttons({useRandomNum}){

        function handleClick(e) {
            e.preventDefault();
            let numberRandom = Math.floor(Math.random() * 100);
            useRandomNum(numberRandom);
          }
          

    return (
        <>
        <div className="w-full text-center mt-5">
        <form>
            <button className="bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white py-2 px-4 border border-green-500 hover:border-transparent rounded" onClick={handleClick}>
            Start Game
            </button>
        </form>
        </div>
        </>
    )
}

export default Buttons;
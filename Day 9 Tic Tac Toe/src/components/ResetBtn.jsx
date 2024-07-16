function ResetBtn({setBoard}) {

  function handleClick(){
    setBoard(Array(9).fill(null))
  }

  return (
    <>
      <button className="border-2 border-solid border-red-500 p-3 rounded-full text-red-400 hover:bg-red-400 hover:text-white" onClick={handleClick}>
        Reset Now
      </button>
    </>
  );
}

export default ResetBtn;

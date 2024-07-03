function Form() {
  return (
    <>
      <div className="w-full text-center">
        <form>
          <label className="block text-gray-700 text-sm font-bold mb-2" />
          Enter the Guess Number :-
          <input
            className="shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="number"
            type="number"
            placeholder="Number"
          />
          <br /> <br />
          <button className="mr-5 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
            Submit
          </button>
          <button className="bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white py-2 px-4 border border-green-500 hover:border-transparent rounded">
            Start Game
          </button>
        </form>
      </div>
    </>
  );
}

export default Form;

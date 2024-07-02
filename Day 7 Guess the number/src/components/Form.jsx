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
      </form>
    </div>
    </>
  );
}

export default Form;

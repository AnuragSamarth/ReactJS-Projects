import { useState } from "react";

function Form({ randomNum , useRandomNum}) {
  const [enterNumber, setEnterNumber] = useState("");
  const [enterNumArray, setEnterNumArray] = useState([]);
  const [feedback, setFeedback] = useState("");

  function handleChange(e) {
    setEnterNumber(Number(e.target.value));
  }

  function generateRandomNumber() {
    let numberRandom = Math.floor(Math.random() * 100);
    useRandomNum(numberRandom);
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(randomNum);
    console.log(enterNumber);
    setEnterNumArray(oldValue => [...oldValue, enterNumber]);
    console.log(enterNumArray);
    if(randomNum === enterNumber){
      setFeedback("You guess the corect number");
      generateRandomNumber();
    }else if(randomNum > enterNumber){
      setFeedback("your guess is too low");
    }else{
       setFeedback("your guess is too high");
    }
    setEnterNumber("");
  }
  return (
    <>
      <div className="w-full text-center">
        <form onSubmit={handleSubmit}>
          <label className="block text-gray-700 text-sm font-bold mb-2" />
          Enter the Guess Number :-
          <input
            className="shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="number"
            type="number"
            placeholder="Number"
            value={enterNumber}
            onChange={handleChange}
          />
          <br /> <br />
          {feedback && <p>{feedback}</p>}
          <button className="mr-5 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" onSubmit={handleSubmit}>
            Submit
          </button>
          
        </form>
      </div>
    </>
  );
}

export default Form;

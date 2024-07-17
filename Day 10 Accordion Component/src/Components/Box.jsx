import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

function Box() {
  const [selectedItem, setSelectedItem] = useState(null);


  const data = [
    {
      id: 1,
      Question: "What is your company name ?",
      Answer: "My Company name is Remostart",
    },
    {
      id: 2,
      Question: "Where is your company ?",
      Answer: "My company located in Nagpur",
    },
    {
      id: 3,
      Question: "What is your job role?",
      Answer: "I am a frontend developer",
    },
  ];

  function handleSelection(selectedID) {
    setSelectedItem(selectedID === selectedItem ? null : selectedID);
  }


  return (
    <>
      {data.map((elem, index) => (
        <div
          className="w-[80%] bg-slate-500 p-4 mt-5 rounded-md cursor-pointer"
          key={index}
        >
          <div
            className="flex items-center justify-between mb-5"
            onClick={() => handleSelection(elem.id)}
          >
            <h1>{elem.Question}</h1>
            <FaChevronDown />
          </div>
          {elem.id === selectedItem ? (
            <div>
              <p>{elem.Answer}</p>
            </div>
          ) : null}
        </div>
      ))}
    </>
  );
}

export default Box;

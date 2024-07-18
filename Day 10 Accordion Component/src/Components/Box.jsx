import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

function Box() {
  const [selectedItem, setSelectedItem] = useState(null);
  const [enableMultipleSelection, setEnableMultipleSection] = useState(false);
  const [multipleSelect, setMultipleSeclect] = useState([]);

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

  function handleMultiSelection(selectedIDs) {
    let cpyMultipal = [...multipleSelect];

    let findCurrentIndexOfElem = cpyMultipal.indexOf(selectedIDs);

    if (findCurrentIndexOfElem === -1) cpyMultipal.push(selectedIDs);
    else cpyMultipal.splice(selectedIDs, 1);

    setMultipleSeclect(cpyMultipal);
  }

  return (
    <>
      <div>
        <button
          className="p-3 bg-green-400 rounded-xl"
          onClick={() => setEnableMultipleSection(!enableMultipleSelection)}
        >
          Enable Multiple Selection
        </button>
      </div>
      {data.map((elem, index) => (
        <div
          className="w-[80%] bg-slate-500 p-4 mt-5 rounded-md cursor-pointer"
          key={index}
          onClick={
            enableMultipleSelection
              ? () => handleMultiSelection(elem.id)
              : () => handleSelection(elem.id)
          }
        >
          <div className="flex items-center justify-between mb-5">
            <h1>{elem.Question}</h1>
            <FaChevronDown />
          </div>
          {enableMultipleSelection
            ? multipleSelect.indexOf(elem.id) !== -1 && <p>{elem.Answer}</p>
            : elem.id === selectedItem && <p>{elem.Answer}</p>}
          {/* {elem.id === selectedItem ? (
            <div>
              <p>{elem.Answer}</p>
            </div>
          ) : null} */}
        </div>
      ))}
    </>
  );
}

export default Box;

import { useSelector } from "react-redux";
import "./CustomModel.css";

function CustomModel({ id, showPopup, setShowPopup }) {
  const { users } = useSelector((state) => state.user);

  const singleUser = users.filter((elem) => elem.id === id);

  return (
    <>
      <div className="modalBackground">
        <div className="modalContainer flex flex-col items-center justify-around">
          <button
            className=" text-black border-2 border-black p-1 rounded-md"
            onClick={() => setShowPopup(false)}
          >
            Close
          </button>
          <h2 className=" text-black">{singleUser[0].name}</h2>
          <h2 className=" text-black">{singleUser[0].email}</h2>
          <h2 className=" text-black">{singleUser[0].age}</h2>
        </div>
      </div>
    </>
  );
}

export default CustomModel;

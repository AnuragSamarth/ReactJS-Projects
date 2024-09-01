import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, showUser } from "../store/slices/userDetailSlice";
import CustomModel from "./CustomModel";
import { Link } from "react-router-dom";
import Text from "./Text";

function Read() {
  const dispatch = useDispatch();

  const [id, setId] = useState();

  const [radioData, setRadioData] = useState("");

  const [showPopup, setShowPopup] = useState(false);

  const { users, loading, searchData } = useSelector((state) => state.user);

  // console.log(searchData)

  useEffect(() => {
    dispatch(showUser());
  }, []);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  function handleId(id) {
    return function () {
      setId(id);
      setShowPopup(true);
    };
  }

  function handleDelete(id) {
    return function () {
      dispatch(deleteUser(id));
    };
  }

  function getUserData(e) {
    setRadioData(e.target.value);
  }

  // console.log(users, loading);

  return (
    <>
      <h1 className=" mt-10 text-5xl text-center">All Data</h1> <br />
      <Text
        type={"radio"}
        lable={"Male"}
        name={"gender"}
        value={"Male"}
        chacked={radioData === "Male"}
        onChange={getUserData}
      />
      <Text
        type={"radio"}
        lable={"Female"}
        name={"gender"}
        value={"Female"}
        onChange={getUserData}
        chacked={radioData === "Female"}
      />
      <Text
        type={"radio"}
        lable={"All"}
        name={"gender"}
        chacked={radioData === ""}
        onChange={getUserData}
      />
      {showPopup ? (
        <CustomModel
          id={id}
          showPopup={showPopup}
          setShowPopup={setShowPopup}
        />
      ) : null}
      {users &&
        users
          .filter((elem) => {
            if (searchData.length === 0) {
              return elem;
            } else {
              return elem.name.toLowerCase().includes(searchData.toLowerCase());
            }
          })
          .filter((elem) => {
            if (radioData === "Male") {
              return elem.gender === radioData;
            } else if (radioData === "Female") {
              return elem.gender === radioData;
            } else {
              return elem;
            }
          })
          .map((item, index) => (
            <div
              key={item.id}
              className=" w-[50%] mt-10  bg-slate-700 m-auto flex items-center justify-center"
            >
              <div>
                <h2>{item.name}</h2>
                <h2>{item.email}</h2>
                <h2>{item.age}</h2>
                <h2>{item.gender}</h2>
                <div className="flex gap-10 mt-5">
                  <button
                    className=" text-black border-2 border-black p-1 rounded-md"
                    onClick={handleId(item.id)}
                  >
                    View
                  </button>
                  <Link
                    to={`/edit/${item.id}`}
                    className=" text-black border-2 border-black p-1 rounded-md"
                  >
                    Edit
                  </Link>
                  <Link
                    className=" text-black border-2 border-black p-1 rounded-md"
                    onClick={handleDelete(item.id)}
                  >
                    Delete
                  </Link>
                </div>
              </div>
            </div>
          ))}
    </>
  );
}

export default Read;

import { useState } from "react";
import Button from "./Button";
import Text from "./Text";
import { useDispatch } from "react-redux";
import { createUser } from "../store/slices/userDetailSlice";
import { useNavigate } from "react-router-dom";

function Form() {
  const [users, setUsers] = useState({});

  const navigate = useNavigate();

  const dispatch = useDispatch();

  function getUserData(e) {
    setUsers({ ...users, [e.target.name]: e.target.value });
    //    console.log(users)
  }

  function handleSubmit(e) {
    e.preventDefault();
    //    console.log(users)
    dispatch(createUser(users));
    setUsers("");
    navigate("/read");
  }

  return (
    <>
      <div className="w-full mt-20">
        <div>
          <h2 className="mb-10 text-3xl">Fill the Data</h2>
          <form action="" onSubmit={handleSubmit}>
            <Text
              type={"text"}
              name={"name"}
              placeholder={"Enter The Name"}
              onChange={getUserData}
              value={users.name}
              className={"p-2 rounded-2xl mb-10 w-[50%]"}
            />
            <br />
            <Text
              type={"text"}
              name={"email"}
              placeholder={"Enter The Email"}
              onChange={getUserData}
              value={users.email}
              className={"p-2 rounded-2xl mb-10 w-[50%]"}
            />
            <br />
            <Text
              type={"number"}
              name={"age"}
              placeholder={"Enter The Age"}
              onChange={getUserData}
              value={users.age}
              className={"p-2 rounded-2xl mb-10 w-[50%]"}
            />
            <br />
            <Text
              type={"radio"}
              lable={"Male"}
              name={"gender"}
              value={"Male"}
              onChange={getUserData}
            />
            <Text
              type={"radio"}
              lable={"Female"}
              name={"gender"}
              value={"Female"}
              onChange={getUserData}
            />
            <br />
            <Button
              lable={"Submit"}
              onClick={handleSubmit}
              className={" border-2 p-2 rounded-3xl mt-5"}
            />
          </form>
        </div>
      </div>
    </>
  );
}

export default Form;

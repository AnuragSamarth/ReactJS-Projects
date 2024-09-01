import { useNavigate, useParams } from "react-router-dom";
import Button from "./Button";
import Text from "./Text";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { updateUser } from "../store/slices/userDetailSlice";

function Update() {
  const { id } = useParams();
  const [updatedata, setUpdateData] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { users } = useSelector((state) => state.user);

  // const singleUser = users.filter(elem => elem.id === id);

  useEffect(() => {
    const singleUser = users.filter((elem) => elem.id === id);
    setUpdateData(singleUser[0]);
  }, []);

  // console.log(singleUser)
  function handleChange(e) {
    setUpdateData({ ...updatedata, [e.target.name]: e.target.value });
  }

  function handleUpdate(e) {
    e.preventDefault();
    dispatch(updateUser(updatedata));
    navigate("/read");
  }

  return (
    <>
      <div className="w-full mt-20">
        <div>
          <h2 className="mb-10 text-3xl">Edit the Data</h2>
          <form action="" onSubmit={handleUpdate}>
            <Text
              type={"text"}
              name={"name"}
              placeholder={"Enter The Name"}
              value={updatedata && updatedata.name}
              className={"p-2 rounded-2xl mb-10 w-[50%]"}
              onChange={handleChange}
            />
            <br />
            <Text
              type={"text"}
              name={"email"}
              placeholder={"Enter The Email"}
              value={updatedata && updatedata.email}
              className={"p-2 rounded-2xl mb-10 w-[50%]"}
              onChange={handleChange}
            />
            <br />
            <Text
              type={"number"}
              name={"age"}
              value={updatedata && updatedata.age}
              placeholder={"Enter The Age"}
              className={"p-2 rounded-2xl mb-10 w-[50%]"}
              onChange={handleChange}
            />
            <br />
            <Text
              type={"radio"}
              lable={"Male"}
              name={"gender"}
              value={"Male"}
              chacked={updatedata && updatedata.gender === "Male"}
              onChange={handleChange}
            />
            <Text
              type={"radio"}
              lable={"Female"}
              name={"gender"}
              value={"Female"}
              chacked={updatedata && updatedata.gender === "Female"}
              onChange={handleChange}
            />
            <br />
            <Button
              lable={"Submit"}
              className={" border-2 p-2 rounded-3xl mt-5"}
            />
          </form>
        </div>
      </div>
    </>
  );
}

export default Update;

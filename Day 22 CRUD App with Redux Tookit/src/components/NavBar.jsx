import { Link } from "react-router-dom";
import Text from "./Text";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { searchUser } from "../store/slices/userDetailSlice";

function NavBar() {
  const [searchData, setSearchData] = useState("");
  const dispatch = useDispatch();

  function handleChange(e) {
    setSearchData(e.target.value);
  }

  useEffect(() => {
    dispatch(searchUser(searchData));
  }, [searchData]);

  return (
    <>
      <div className=" flex items-center justify-evenly">
        <Link to="/">Create Post</Link>
        <Link to="/read">All Post</Link>
        <Text
          type={"text"}
          onChange={handleChange}
          placeholder={"Search"}
          value={searchData}
          className={"p-2 rounded-2xl"}
        />
      </div>
    </>
  );
}

export default NavBar;

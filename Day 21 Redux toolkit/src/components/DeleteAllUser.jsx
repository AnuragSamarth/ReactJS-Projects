import React from "react";
import { useDispatch } from "react-redux";
import { deleteUser } from "../store/slices/UserSlice";

const DeleteAllUser = () => {
   
  const dispatch = useDispatch();


  function handleDeleteAllUsers(){
    dispatch(deleteUser())
  }

  return (
    <>
      <button onClick={handleDeleteAllUsers}>DeleteAllUser</button>
    </>
  );
};

export default DeleteAllUser;

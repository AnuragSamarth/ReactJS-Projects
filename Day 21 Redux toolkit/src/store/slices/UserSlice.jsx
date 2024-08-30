import { createSlice } from "@reduxjs/toolkit";

const usersSlice = createSlice({
    name: 'users',
    initialState: [],
    reducers: {
        addUser(state, action){
             state.push(action.payload)
            //  console.log(action.payload)
            //  console.log(state)
        },
        removeUser(state, action){
            // console.log("hii", action.payload)
            state.splice(action.payload, 1)
        },
        deleteUser(state, action){
            // console.log("delete user")
            state.splice(0, state.length)
        },
    },
});

// console.log(usersSlice.actions)
export default usersSlice.reducer;

export const {addUser,removeUser, deleteUser} = usersSlice.actions;
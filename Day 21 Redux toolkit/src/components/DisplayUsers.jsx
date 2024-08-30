import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { removeUser } from "../store/slices/UserSlice";

function DisplayUsers(){
    
    const dispatch = useDispatch()


    const data = useSelector((state)=> {
        return state.users;
    })

    // console.log(data)

    function handleUserDelete(id){
            dispatch(removeUser(id))
    }

    return (
        <>
        {
            data.map((user, id) => {
                return <li key={id}>{user}
                 <button onClick={()=> handleUserDelete(id)}>Delete</button>
                </li> 
           })
        }
        </>
    )
}

export default DisplayUsers;
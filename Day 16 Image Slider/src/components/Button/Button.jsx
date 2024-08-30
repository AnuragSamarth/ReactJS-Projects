function Button({lable='', onClick=()=>{}}={}){

 

    return (
        <div>
            <button className=" border-2 border-zinc-700 p-4 rounded-xl" onClick={onClick}>{lable}</button>
        </div>
    )
}

export default Button;
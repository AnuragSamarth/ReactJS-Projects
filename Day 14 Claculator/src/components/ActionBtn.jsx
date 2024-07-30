function ActionBtn({className="", lable='', onClick=()=>{}, dataOperation} = {}){
    return <>
        <button type="button" data-operation={dataOperation}  className={className} onClick={onClick}>{lable}</button>
    </>
}

export default ActionBtn;
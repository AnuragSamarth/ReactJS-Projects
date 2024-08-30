function ActionBtn({className, lable, onClick}){
    return <>
        <button type="button" className={className} onClick={onClick}>{lable}</button>
    </>
}

export default ActionBtn;
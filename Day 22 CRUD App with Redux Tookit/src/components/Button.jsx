function Button({lable='', onClick=()=>{}, className='', type=''}){
    return (
        <>
        <button type={type} onClick={onClick} className={className}>{lable}</button>
        </>
    )
}

export default Button
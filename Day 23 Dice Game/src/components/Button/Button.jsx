function Button({lable='',className='', onclick=()=>{}}){
    return (
        <>
        <button onClick={onclick} className={className}>{lable}</button>
        </>
    )
}

export default Button;
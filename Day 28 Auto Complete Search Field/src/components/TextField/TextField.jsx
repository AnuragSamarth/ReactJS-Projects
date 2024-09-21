function TextField({value='', placeholder='', onChange=()=>{}, className=''}){
    return (
        <>
          <div>
            <input type="text" name="text" value={value} placeholder={placeholder} onChange={onChange} className={className} />
          </div>
        </>
    )
}

export default TextField;
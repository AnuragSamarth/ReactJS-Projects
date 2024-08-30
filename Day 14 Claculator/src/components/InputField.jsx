function InputField({className="",value, onInput=()=>{}}= {}){

     function handleInput(e){
      
        onInput(e.target.value)
     }

    return <>
        <input
          type='text'
          className={className}
          value={value}
          onInput={handleInput}
        />
    </>
}

export default InputField;
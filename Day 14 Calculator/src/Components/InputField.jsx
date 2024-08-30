function InputField({className,type,value, onChange}){
    return <>
        <input
          type={type}
          className={className}
          value={value}
          onChange={onChange}
          readOnly
        />
    </>
}

export default InputField;
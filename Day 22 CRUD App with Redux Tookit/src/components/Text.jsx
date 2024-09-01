function Text({
  type = "",
  lable = "",
  onChange = () => {},
  placeholder = "",
  className = "",
  value = "",
  name = "",
  chacked = "",
}) {
  return (
    <>
      <input
        type={type}
        name={name}
        onChange={onChange}
        placeholder={placeholder}
        className={className}
        value={value}
        checked={chacked}
      />{" "}
      {lable}
    </>
  );
}

export default Text;

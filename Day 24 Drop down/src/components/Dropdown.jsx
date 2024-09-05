function Dropdown({ cityData = "", onChange = () => {}, areas = [] }) {
  console.log(cityData);

  function handleChange(e) {
    onChange(e.target.value);
  }
  return (
    <>
      <div>
        <div>
          <select name="" id="" onChange={handleChange}>
            {Object.keys(cityData).map((item, i) => (
              <option value={item} key={i}>{item}</option>
            ))}
          </select>
          <select>
            {
              areas.map((item,i)=>(
                <option value={item} key={i}>{item}</option>
              ))
            }
        </select>
        </div>
      </div>
    </>
  );
}

export default Dropdown;

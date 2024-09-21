function ShowData({ data, onClick=()=>{} }) {
  return (
    <>
      {data.map((item,i) => (
        <li key={item?.id || i} onClick={onClick()} className=" cursor-pointer mb-3">{item?.name}</li>
      ))}
    </>
  );
}

export default ShowData;

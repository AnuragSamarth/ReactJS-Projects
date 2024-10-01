function Light({ color,  activeColor }) {
    // console.log(color, activeColor)
    const opacity = color === activeColor ? 1 : 0.3
  return (
    <>
      <div
        className={`w-24 h-24 rounded-full mb-2`}
        style={{ backgroundColor: color, opacity }}
      />
    </>
  );
}

export default Light;

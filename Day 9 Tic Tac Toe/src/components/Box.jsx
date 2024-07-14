import Cart from "./Cart";
import ResetBtn from "./ResetBtn";

function Box() {
  return (
    <>
      <div className="container md:w-[50%] h-3/4 rounded-xl lg:w-[40%]">
        <div className="row1 p-2 flex items-center justify-between gap-3">
          <Cart />
        </div>
        <div className="row2 p-2 flex items-center justify-between gap-3">
          <Cart />
        </div>
        <div className="row2 p-2 flex items-center justify-between gap-3">
          <Cart />
        </div>
        <div className="flex items-center justify-center mt-5">
          <ResetBtn />
        </div>
      </div>
    </>
  );
}

export default Box;

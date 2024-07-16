function Cart({value, onCartClick}) {

  return (
    <>
      <div className="w-40 h-28 rounded-xl border-blue border-2 border-solid font-sans text-5xl text-center pt-6" onClick={onCartClick}>{value}</div>
    </>
  );
}

export default Cart;

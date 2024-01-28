import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";
// import ItemList from "./ItemList";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  dispatch=useDispatch()
  const clearMyCart=()=>{
    dispatch(clearCart())
  }
  return (
    <div className=" text-center m-4 p-4">
      <h1 className=" font-bold text-2xl uppercase">Cart</h1>
      <div className=" w-6/12 mx-auto">
        <button className="  text-white rounded-md bg-red-600 p-1 my-3" onClick={clearMyCart}>Clear Cart</button>
        {
            (cartItems.length===0?<h1>Your Cart Is Empty Add Items To Your cart</h1>:<ItemList data={cartItems} />)
        }
      </div>
      {/* <ItemList data={cartItems}/> */}
    </div>
  );
};

export default Cart;

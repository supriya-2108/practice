import { useState,useEffect, useContext } from "react";
import LOGO_URL  from "../utils/contants";
import { Link } from "react-router-dom";
import UserContext from "../utils/context";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useSelector } from "react-redux";
const Header = () => {
  const [btnName,setBtnName]=useState('LOGIN')
  const {loggedInUser}=useContext(UserContext)
  const onlineStatus=useOnlineStatus()
  // Subscribing to stoore using selector
  const cartItems=useSelector((store)=>store.cart.items)
  return (
    <div className="flex justify-between bg-pink-200 shadow-lg sm:bg-yellow-200">
      <div className="logo-container">
        <img
          className="w-24"
          src={LOGO_URL}
          alt="logo"
        />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">UserStatus: {onlineStatus!==false?"online":"offline" }</li>
          <li className="px-4"><Link to="/">Home {loggedInUser}</Link></li>
          <li className="px-4"><Link to="/about">About</Link></li>
          <li className="px-4"><Link to="/contact">ContactUs</Link></li>
          <li className="px-4 font-bold text-xl"><Link to="/cart">Cart- ({cartItems.length} Items)</Link></li>
          <button onClick={()=>btnName==="LOGIN"?setBtnName('LOGOUT'):setBtnName('LOGIN')}>{btnName}</button>
        </ul>
      </div>
    </div>
  );
};

export default Header
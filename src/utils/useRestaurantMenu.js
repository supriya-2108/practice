import { useEffect, useState } from "react";
import {URL} from "./contants";
const useRestaurantMenu = (resId ) => {
    const [resInfo,setResInfo]=useState(null)
  useEffect(() => {
    fetchMenu();
  }, []);
  const fetchMenu = async () => {
    const data = await fetch(URL + resId);
    const res = await data.json();
    setResInfo(res.data)
  };
  return resInfo;
};

export default useRestaurantMenu;

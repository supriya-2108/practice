import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import ResCategory from "./ResCategory";
const RestaurantMenuPage = () => {
  const { resId } = useParams();
  const [showIndex,setShowIndex]=useState(null);
  const resInfo = useRestaurantMenu(resId);
  if (resInfo === null) {
    return <Shimmer />;
  } else {
    const { name, cuisines, costForTwoMessage } =
      resInfo?.cards[0]?.card?.card?.info;
    const menu =
      resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2].card.card
        .itemCards;
    const category =
      (resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards).filter(
        (val) =>
          val?.card?.card?.["@type"] ===
            "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" ||
          val?.card?.card?.["@type"] ===
            "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory"
      );
    return (
      <div className="text-center">
        <h1 className="font-bold my-6 text-2xl">{name}</h1>
        <p className="font-bold text-md">
          {cuisines.join(", ")} - {costForTwoMessage}
        </p>
        {/* <h2>Menu</h2>
      <ul>
        {
            menu.map((val,index)=>{
               return <li key={val.card.info.id}>{val.card.info.name} - {val.card.info.price/100}Rs</li>
            })
        }
      </ul> */}
        {category.map((item,index) => (
          <ResCategory
          key={index}
            title={item.card.card.title}
            data={item.card.card.itemCards}
            display={index===showIndex ? true:false}
            setShowIndex={()=>setShowIndex((prevstate)=>
              prevstate===null?index:prevstate===index?null:index)}
          />
        ))}
      </div>
    );
  }
};

export default RestaurantMenuPage;

import { CDN_URL } from "../utils/contants";
const RetaurantCard = ({ details }) => {
  const { name, cuisines, costForTwo, avgRating, deliveryTime } = details?.info;
  console.log(details)
  return (
    <div data-testid="rescard" className="m-4 p-4 w-[250px] rounded-lg bg-slate-200 hover:bg-slate-500 hover:text-cyan-50">
      <img
        className="rounded-lg"
        src={CDN_URL+details.info.cloudinaryImageId}
        alt="res-logo"
      />
      <h3 className="font-bold py-2 text-lg">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{costForTwo}</h4>
      <h4>{avgRating}</h4>
      <h4>{deliveryTime}</h4>
    </div>
  );
};


// highorder  function
export const With50PercentLabel=(RetaurantCard)=>{
  return(props)=>{
    return(
      <div>
        <label className="absolute bg-black text-white m-3 p-1 rounded-lg">50% Off</label>
        <RetaurantCard {...props}/>
      </div>
    )
  }
}
// restaurant card as input--> promoted restaurant card
export default RetaurantCard

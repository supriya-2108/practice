import RetaurantCard, { With50PercentLabel } from "./RetaurantCard";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/context";

const Body = () => {
  // local state variable powerful state variable
  const [listOfRestaurant, setlistOfRestaurant] = useState([]);
  const [filterRestaurant, setFilterRestaurant] = useState([]);
  const [searchTxt, setSearchTxt] = useState("");
  const {loggedInUser,setName}=useContext(UserContext)
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const res = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.558053&lng=77.2279415&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await res.json();
    // optional chaining
    setlistOfRestaurant(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilterRestaurant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  const RestaurantCardPromoted = With50PercentLabel(RetaurantCard);
  // conditional rendering
  const filterResult = () => {
    const updatedList = listOfRestaurant.filter((item) =>
      item.info.name.toLowerCase().includes(searchTxt.toLowerCase())
    );
    setFilterRestaurant(updatedList);
  };
  const status = useOnlineStatus();
  if (status === false) {
    return <h3>Looks like you're offline</h3>;
  }
  return filterRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="flex">
        <div className="m-4 p-4">
          <input
            type="text"
            data-testid="searchInput"
            className="border border-solid border-black rounded-s-sm"
            value={searchTxt}
            onChange={(e) => setSearchTxt(e.target.value)}
          />
          <button
            className="px-4 py-1 bg-green-300 m-4 rounded-md"
            onClick={filterResult}
          >
            Search
          </button>
        </div>
        <div className="m-4 p-4 flex items-center">
          <button
          data-testid="ratedButton"
            className="px-4 py-1 bg-slate-300 rounded-md"
            onClick={() => {
              const filterlist = listOfRestaurant.filter(
                (item) => item.info.avgRating >= 4.0
              );
              setFilterRestaurant(filterlist);
            }}
            onMouseOver={() => console.log("mouse hovered")}
          >
            Top Rated Restaurants
          </button>
        </div>
      </div>
      <input type="text" value={loggedInUser} className=" border-black-5" onChange={(e)=>setName(e.target.value)}/>
      <div className="flex flex-wrap ml-10">
        {filterRestaurant.map((item, index) => (
          <Link
            to={`/restaurant/${item.info.id}`}
            style={{ textDecoration: "none", color: "black" }}
            key={item.info.id}
          >
            {(item?.info?.aggregatedDiscountInfoV3?.header) ? (
              <RestaurantCardPromoted details={item} />
            ) : (
              <RetaurantCard details={item} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;

import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
import { CDN_URL } from "../utils/contants";
const ItemList = ({ data }) => {
  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    // dispatch an action
    dispatch(addItem(item));
  };

  return (
    <ul>
      {data.map((item, index) => (
        <li key={item.card.info.id}  className=" text-left font-bold my-5 mx-10">
          <div className=" flex">
            <div className="">
              <button
                className=" absolute bg-red-700 text-white my-5 h-7 w-20 text-sm rounded-md mb-3"
                onClick={() => handleAddItem(item)}
              >
                Add Item
              </button>
              <img
                src={CDN_URL + item.card.info.imageId}
                alt={item.card.info.imageId}
                className=" w-[150px] my-5"
              />
            </div>
            <div className=" my-auto ml-7">
              <span>{item.card.info.name}</span>
              <span className=" mx-4 ">{item.card.info.price / 100}Rs</span>
              <p className=" font-light">{item.card.info.description}</p>
            </div>
          </div>
          <hr />
        </li>
      ))}
    </ul>
  );
};
export default ItemList;

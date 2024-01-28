import ItemList from "./ItemList";

const ResCategory = ({ title, data,display,setShowIndex }) => {
  return (
    <div className="my-8 w-6/12 mx-auto bg-grey shadow-lg">
      <div className=" flex justify-between p-4">
        <span className=" font-bold cursor-pointer" onClick={()=>setShowIndex()}>{title}({data.length})</span>
        <span className=" cursor-pointer mx-5">{">"}</span>
      </div>
      <hr/>
     {display && <ItemList data={data}/>}
    </div>
  );
};

export default ResCategory;

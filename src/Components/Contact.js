import React from "react";
const Contact = () => {
  return (
    <>
      <h1 className=" text-3xl p-3 m-3 font-bold">Contact Us</h1>
      <form className=" flex flex-col w-[300px] mx-auto border-s-black-50 p-5">
        <input
          type="text"
          className=" border border-s-black-100 my-5 h-8 rounded-md"
          placeholder="name"
        />
        <input
          type="text"
          className=" border border-s-black-100 my-5 h-8 rounded-md"
          placeholder="password" />
        <button className=" bg-slate-400 w-20 mx-auto h-8 rounded-lg">Submit</button>
      </form>
    </>
  );
};

export default Contact;

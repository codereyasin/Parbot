import React from "react";

function Subscription() {
  return (
    <div className="py-[90px]">
    <div className="max-w-4xl container mx-auto">
     <div className="items-center flex flex-col text-center space-y-5">
     <h1 className="font-bold text-[25px]">Join Our Newsletter for $10 off</h1>
      <p className="text-[12px]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti,
        <br /> veniam mollitia dolorum delectus aliquam necessitatibus ex
        inventore repudiandae maiores odit!
      </p>
      <div>
        <input
          className="outline-none border-r-0 border-2 border-gray-500 py-2 px-2 pr-[0px] sm:pr-[70px] sm:px-5 "
          type="text"
          placeholder="Search your product here..."
        />
        <button className="border-none bg-black text-gray-200 py-[10px] px-[20px]">
          Search
        </button>
      </div>
     </div>
    </div>
    </div>
  );
}

export default Subscription;

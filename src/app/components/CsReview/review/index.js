import React from "react";

function Creview({name, img, emoji, location }) {
  return (
    <div>
        <div className="border p-[15px] w-[220px] h-[180px] space-y-4 shadow-2xl">
          <span className="">{emoji}</span>
          <p className="text-[10px] text-gray-600">
            "Lorem ipsum dolor sit amet consectetur
            <br /> adipisicing elit. Animi enim nihil nesciunt
            <br /> quis sint! Fugit illum mollitia facere"
          </p>
          <div className="flex items-center space-x-2 pt-[5px]">
            <img className="rounded-full w-7 h-6 items-center object-cover" loading="lazy" src={img} alt="" />
            <div>
              <h1 className="text-[12px]">{name}</h1>
              <span className="text-[11px] text-gray-600">{location}</span>
            </div>
          </div>
        </div>
      </div>
  );
}

export default Creview;

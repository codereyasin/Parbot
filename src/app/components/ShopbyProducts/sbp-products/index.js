import React from "react";

function Sbp({ img, btn = "Tables", className, btnc }) {
  return (
    <>
      <div className={className}>
        <img
          className="sm:w-40 sm:h-52 w-24 h-[8rem] object-cover rounded-md relative"
          loading="lazy"
          src={img}
          alt=""
        />
        <div className="absolute flex items-center">
          <button className={btnc}>
            {btn}
          </button>
        </div>
      </div>
    </>
  );
}

export default Sbp;

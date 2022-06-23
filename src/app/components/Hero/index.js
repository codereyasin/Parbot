import React from "react";
import Herob from "./HeroB";

function Hero() {
  return (
    <>
    <div className="pb-14 bg-gray-50 sm:px-0 px-5">
      <div className=" relative container mx-auto">
        <div className="flex justify-center">
          <div className="sm:mr-[7.5rem] mr-[1.5rem] flex flex-col sm:space-y-5 space-y-1 justify-center">
            <h1 className="text-[50px]">
              Future
              <br /> of furniture
            </h1>
            <p className="text-gray-500 ">
              Find an elegant and luxurious interior
              <br /> designed by a professional designer.
            </p>
          </div>
          <div className="flex space-x-14">
            <img
              className="w-[500px] h-[450px] object-cover"
              loading="lazy"
              src="https://images.unsplash.com/photo-1598928506311-c55ded91a20c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              alt=""
            />
            <img
              className="w-[116px] h-[450px] object-cover hidden lg:block"
              loading="lazy"
              src="https://images.unsplash.com/photo-1589834390005-5d4fb9bf3d32?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
              alt=""
            />
            <img
              className="w-[116px] h-[450px] object-cover hidden xl:block"
              loading="lazy"
              src="https://images.unsplash.com/photo-1564078516393-cf04bd966897?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
              alt=""
            />
          </div>
          <div className="absolute xl:bottom-10 bottom-2 sm:left-0 2xl:left-[150px] xl:left-[25px] left-0">
            <input
              className="outline-none border-r-0 border-2 border-gray-500 py-2 px-2 pr-[0px] pl-0 2xl:pr-[115px] sm:pr-[30px] sm:px-4 "
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
    <div>
    <div className="my-[50px] flex-col sm:flex-row gap-5 flex container items-center mx-auto px-5 justify-between">
          <Herob
            title="Fast & Free Shipping"
            img="https://img.freepik.com/free-vector/blue-pick-up-car-cartoon-style-isolated-white-background_1308-64747.jpg"
          />
          <Herob
            title="Modular, easy-to-move-desin"
            img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy0KN07uhzSn4DWuM_WVNvqQ6jkZuJekTz3C1DyA8L9-l9TSXS1xlCUuRl_QJQahgpiPc&usqp=CAU"
          />
          <Herob
            title="Durable, premium materials"
            img="https://thumbs.dreamstime.com/b/cartoon-wood-log-isolated-white-background-vector-cartoon-wood-log-isolated-white-background-144460252.jpg"
          />
        </div>
    </div>
    </>
  );
}

export default Hero;

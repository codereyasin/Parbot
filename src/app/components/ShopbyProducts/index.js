import React from "react";
import Button from "../button";
import Sbp from "./sbp-products";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Pagination, Navigation } from "swiper";
 
function ShopbyP() {
  return (
    <div className="py-24">
      <div className="pr-5 container mx-auto">
        <div className="flex justify-between sm:flex-row flex-col items-center pb-9 ">
          <h1 className="font-bold text-[20px]">Shop by Product</h1>
          <p className="text-[11px] text-gray-500">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            <br /> Ipsa incidunt debitis voluptates corrupti molestias.
          </p>
        </div>
        <div className="sm:flex items-center space-y-6 sm:space-y-0 sm:justify-around sm:pl-[0px] justify-around space-x-2 pb-20">
          <Swiper
            spaceBetween={50}
            slidesPerView={3}
            loop={true}
            autoplay={{
                delay: 1200,
                disableOnInteraction: false
            }}
            modules={[Autoplay, Pagination, Navigation]}
            >
           <SwiperSlide> <Sbp
              btnc="bg-black mt-0 sm:mt-[160px] mt-[55px] px-5 py-1 text-[13px] text-white"
              className=" items-center justify-center flex"
              img="https://images.unsplash.com/photo-1503602642458-232111445657?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGZ1cm5pdHVyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
              btn="Stools"
            /></SwiperSlide>
            <SwiperSlide><Sbp
              btnc="bg-black mt-0 sm:mt-[160px] mt-[80px] px-5 py-1 text-[13px] text-white"
              className=" justify-center flex"
              img="https://images.unsplash.com/photo-1551298370-9d3d53740c72?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGZ1cm5pdHVyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
              btn="Chairs"
            /></SwiperSlide>
           <SwiperSlide> <Sbp
              btnc="bg-black mt-0 sm:mt-[160px] mt-[80px] px-5 py-1 text-[13px] text-white"
              className=" justify-center flex"
              img="https://images.unsplash.com/photo-1540574163026-643ea20ade25?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGZ1cm5pdHVyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
              btn="Sofas"
            /></SwiperSlide>
           <SwiperSlide><Sbp
              btnc="bg-black mt-0 sm:mt-[160px] mt-[80px] px-5 py-1 text-[13px] text-white"
              className=" justify-center flex"
              img="https://images.unsplash.com/photo-1485431142439-206ba3a9383e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHRhYmxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
              btn="Tables"
            /></SwiperSlide> 
            <SwiperSlide><Sbp
              btnc="bg-black mt-0 sm:mt-[160px] mt-[80px] px-5 py-1 text-[13px] text-white"
              className=" justify-center flex"
              img="https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHRhYmxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
              btn="Tables"
            /></SwiperSlide>
            <SwiperSlide><Sbp
              btnc="bg-black mt-0 sm:mt-[160px] mt-[80px] px-5 py-1 text-[13px] text-white"
              className=" justify-center flex"
              img="https://images.unsplash.com/photo-1615884241431-d07c87e30ab2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
              btn="Book"
            /></SwiperSlide>
          </Swiper>
        </div>
        <div className="flex  space-x-24 items-center justify-center pt-10">
          <div className="rounded-md sm:w-[400px] sm:h-[300px] w-[250px] h-[270px] flex justify-center object-cover">
            <img
              loading="lazy"
              src="https://images.unsplash.com/photo-1655813678352-e7647461724d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
              alt=""
            />
          </div>
          <div className="space-y-3">
            <h1 className="font-bold text-[20px]">
              Discover the interior
              <br /> desing of your deams
            </h1>
            <p className="text-[12px] text-gray-600">
              Lorem ipsum dolor sit amet consectetur,
              <br /> adipisicing elit. Perferendis, officiis! Unde
              <br /> voluptatem in the wrold
            </p>
            <Button title="Get inspired" />
            <div>
              <img
                className="rounded-md ml-[25px] sm:w-[200px] sm:h-[200px] w-[150px] h-[120px] object-cover mt-5"
                loading="lazy"
                src="https://images.unsplash.com/photo-1505489304219-85ce17010209?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cmVhZGluZyUyMHNvZmF8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShopbyP;

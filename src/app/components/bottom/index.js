import React from "react";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FiMail } from "react-icons/fi";
import { BsFacebook } from "react-icons/bs";
import { FiInstagram } from "react-icons/fi";
import { AiOutlineTwitter } from "react-icons/ai";

function Fotter() {
  return (
    <div className="bg-slate-700 py-[50px]">
      <div className="px-5 container mx-auto flex sm:pl-0 pl-[40px] sm:justify-center">
        <div className="flex justify-between sm:flex-row  flex-col sm:space-y-0 md:space-x-16 sm:space-x-9 lg:space-x-40 space-y-6 ">
          <div className="flex flex-col space-y-5">
            <a className="text-[30px] text-white font-medium" href="#">
              Parbot
            </a>
            <span className="text-gray-300 text-[11px]">
              625 E Franklin Ave, Minneapolis,
              <br /> MN 55404, Usa
            </span>
            <span className="text-white text-[12px]">
              &copy; 2022{" "}
              <a className="font-bold text-[13px]" href="https://www.facebook.com/EyAsiN.ArAfAt.XYZ/">
                Eyasin
              </a>
              . All right reserved
            </span>
          </div>
          <div className="flex flex-col">
            <h3 className="font-bold text-[18px] text-gray-50">About us</h3>
            <div className="flex flex-col space-y-2">
              <a className="text-gray-200 hover:text-gray-400" href="#">
                Our story
              </a>
              <a className="text-gray-200 hover:text-gray-400" href="#">
                Designer
              </a>
              <a className="text-gray-200 hover:text-gray-400" href="#">
                Craftsmanship
              </a>
              <a className="text-gray-200 hover:text-gray-400" href="#">
                Sustainability
              </a>
            </div>
          </div>
          <div className="flex flex-col">
            <h3 className="font-bold text-[18px] text-gray-50">Support</h3>
            <div className="flex flex-col space-y-2 ">
              <a className="text-gray-200 hover:text-gray-400" href="#">
                Our story
              </a>
              <a className="text-gray-200 hover:text-gray-400" href="#">
                Designer
              </a>
              <a className="text-gray-200 hover:text-gray-400" href="#">
                Craftsmanship
              </a>
              <a className="text-gray-200 hover:text-gray-400" href="#">
                Sustainability
              </a>
            </div>
          </div>
          <div className="flex flex-col">
            <h3 className="font-bold text-[18px] text-gray-50 pb-[10px]">
              Contract Us
            </h3>
            <div className="flex flex-col space-y-2 pb-[12px]">
              <a
                className="flex items-center text-gray-200"
                href="tel:01704660898"
              >
                <span>
                  <BsFillTelephoneFill />
                </span>
                +2 666 272 2147
              </a>
              <a className="text-gray-200 flex items-center" href="#">
                <span>
                  <FiMail />
                </span>{" "}
                eyasin@gmail.com
              </a>
              <div className="flex space-x-3 pt-3">
                <span className="text-gray-200 text-[19px] hover:text-red-400 transition-all">
                  <BsFacebook />
                </span>
                <span className="text-gray-200 text-[19px] hover:text-red-400 transition-all">
                  <AiOutlineTwitter />
                </span>
                <span className="text-gray-200 text-[19px] hover:text-red-400 transition-all">
                  <FiInstagram />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Fotter;

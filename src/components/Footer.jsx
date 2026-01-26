import React from "react";
import { MdOutlineMailOutline } from "react-icons/md";


const Footer = () => {
  return (
    <footer className="w-full py-3 px-3 sm:px-15 sm:py-5">
      <div className="w-full rounded-2xl py-8 px-5 sm:py-10 sm:px-15 sm:flex sm:justify-between sm:align-middle sm:gap-50 bg-black text-white">
        <div className="w-full sm:[50%]">
          <h1 className="text-2xl sm:text-4xl font-black text-center sm:text-start pb-5">
            STAY UPTO DATE ABOUT OUR LATEST OFFERS
          </h1>
        </div>


        <div className="w-full sm:w-[50%] flex justify-center align-middle flex-col gap-3 relative ">
          <input
            className="w-full sm:w-80 p-2 rounded-3xl bg-white text-black placeholder:text-gray-500 pl-10"
            type="email"
            name=""
            id=""
            placeholder="Enter your email address"
          />
          <MdOutlineMailOutline className="absolute text-gray-500 top-2.5 left-3 sm:top-3.5 text-[1.3rem]" />

          <button className="w-full sm:w-80 p-2 rounded-3xl bg-white text-black">
            Subscribe to Newslatter
          </button>
        </div>


      </div>
    </footer>
  );
};

export default Footer;

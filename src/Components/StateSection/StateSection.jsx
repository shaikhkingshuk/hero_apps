import React from "react";

const StateSection = () => {
  return (
    <div className="h-auto w-full flex flex-col items-center bg-gradient-to-r from-[#632EE3] to-[#9F62F2]">
      <div className="mt-[80px] mb-[40px] ">
        <h1 className="text-[43px] md:text-[48px] font-bold text-center">
          Trusted by Millions, Built for You
        </h1>
      </div>
      <div className="flex flex-col md:flex-row md:justify-around  w-full p-[10px]">
        <div className="h-auto w-auto text-[16px] flex flex-col items-center mb-[20px] bg-black/20 backdrop-blur-md rounded-lg p-4 md:bg-transparent md:backdrop-blur-0 md:p-0 ">
          <p>Total Downloads</p>
          <p className="text-[55px] md:text-[64px] font-extrabold">29.6M</p>
          <p>21% more than last month</p>
        </div>
        <div className="h-auto w-auto text-[16px] flex flex-col items-center mb-[20px] bg-black/20 backdrop-blur-md rounded-lg p-4 md:bg-transparent md:backdrop-blur-0 md:p-0">
          <p>Total Reviews</p>
          <p className="text-[55px] md:text-[64px]  font-extrabold">906K</p>
          <p>46% more than last month</p>
        </div>
        <div className="h-auto w-auto text-[16px] flex flex-col items-center mb-[20px] bg-black/20 backdrop-blur-md rounded-lg p-4 md:bg-transparent md:backdrop-blur-0 md:p-0">
          <p>Active Apps</p>
          <p className="text-[55px] md:text-[64px]  font-extrabold">132+</p>
          <p>31 more will Launch</p>
        </div>
      </div>
    </div>
  );
};

export default StateSection;

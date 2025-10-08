import React from "react";

const StateSection = () => {
  return (
    <div className="h-[410px] w-full flex flex-col items-center bg-gradient-to-r from-[#632EE3] to-[#9F62F2]">
      <div className="mt-[80px] mb-[40px] ">
        <h1 className="text-[48px] font-bold">
          Trusted by Millions, Built for You
        </h1>
      </div>
      <div className="flex flex-row gap-[20px]">
        <div className="h-[152px] w-[342px] text-[16px] flex flex-col items-center">
          <p>Total Downloads</p>
          <p className="text-[64px] font-extrabold">29.6M</p>
          <p>21% more than last month</p>
        </div>
        <div className="h-[152px] w-[342px] text-[16px] flex flex-col items-center">
          <p>Total Reviews</p>
          <p className="text-[64px] font-extrabold">906K</p>
          <p>46% more than last month</p>
        </div>
        <div className="h-[152px] w-[342px] text-[16px] flex flex-col items-center">
          <p>Active Apps</p>
          <p className="text-[64px] font-extrabold">132+</p>
          <p>31 more will Launch</p>
        </div>
      </div>
    </div>
  );
};

export default StateSection;

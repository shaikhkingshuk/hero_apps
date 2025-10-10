import React from "react";
import SingleApp from "./SingleApp";
import { Link } from "react-router";

const TrendingApps = ({ data }) => {
  return (
    <div>
      <div className="flex flex-col items-center mt-[80px] mb-[40px]">
        <div className="mb-[16px]  flex justify-center">
          <h1 className="text-[43px] md:text-[48px] font-bold text-black text-center">
            Trending Apps
          </h1>
        </div>
        <div>
          <p className="text-[#627382] text-[20px] flex justify-center text-center">
            Explore All Trending Apps on the Market developed by us
          </p>
        </div>
      </div>
      <div className="flex justify-center p-[10px]">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[20px] max-w-[1440px] w-full ">
          {data.map((val) => (
            <SingleApp key={val.id} val={val}></SingleApp>
          ))}
        </div>
      </div>
      <div className="flex justify-center items-center mt-[40px] mb-[80px]">
        <Link
          to="/allApps"
          className="border-none btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] font-semibold text-[16px]"
        >
          Show All
        </Link>
      </div>
    </div>
  );
};

export default TrendingApps;

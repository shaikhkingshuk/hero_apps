import React from "react";
import AppDetails from "./AppDetails";
import { Link } from "react-router";

const SingleApp = ({ val }) => {
  return (
    <Link
      to={`/allApps/app_details/${val.id}`}
      className=" h-full  w-full  flex flex-col bg-white p-[10px] shadow-lg rounded-xl  "
    >
      <div className=" h-full w-full  bg-[#E9E9E9]">
        <img
          src={val.image}
          className="w-full h-full object-cover bg-[#D2D2D2]"
        ></img>
      </div>
      <div className="mt-[16px]">
        <h1 className="text-[20px] text-black font-semibold px-[10px]">
          Title : {val.title}
        </h1>
      </div>
      <div className="flex flew-row justify-between px-[10px] mt-[16px]">
        <p className="text-[#00D390] flex flex-row text-[16px] items-center gap-[8px]">
          <img src="/images/icon-downloads.png" className="h-[16px]"></img>
          {val.shortDownload}
        </p>
        <p className="text-[#FF8811] flex flex-row text-[16px] items-center gap-[8px]">
          <img src="/images/icon-ratings.png" className="h-[16px]"></img>
          {val.ratingAvg}
        </p>
      </div>
    </Link>
  );
};

export default SingleApp;

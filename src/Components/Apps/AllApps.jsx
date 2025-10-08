import React from "react";
import SingleApp from "./SingleApp";
import { useLoaderData } from "react-router";

const AllApps = () => {
  const data = useLoaderData();
  return (
    <div className="flex justify-center mb-[80px]">
      <div className="max-w-[1440px] w-full">
        <div className="flex flex-col items-center mb-[40px] mt-[80px]">
          <h1 className="font-bold text-[48px] text-[#001931]">
            Our All Applications
          </h1>
          <p className="mt-[16px] text-[#627382]">
            Explore All Apps on the Market developed by us. We code for Millions
          </p>
        </div>
        <div>
          <div className="text-black flex justify-between mb-[16px]">
            <h1 className="font-semibold text-[24px] ">( ) Apps Found</h1>
            <label className="input bg-amber-50">
              <svg
                className="h-[1em] opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.3-4.3"></path>
                </g>
              </svg>
              <input type="search" required placeholder="Search" />
            </label>
          </div>
          <div className="flex justify-center">
            <div className="grid grid-cols-4 gap-[30px] ">
              {data.map((val) => (
                <SingleApp val={val}></SingleApp>
              ))}
            </div>
          </div>
          {/* border-2 border-amber-500 */}
        </div>
      </div>
    </div>
  );
};

export default AllApps;

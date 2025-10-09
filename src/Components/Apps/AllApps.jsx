import React, { useEffect, useState } from "react";
import SingleApp from "./SingleApp";
import { useLoaderData } from "react-router";
import AppNotFound from "./AppNotFound";
import Spinner from "../Spinner";

const AllApps = () => {
  const [loading, setLoading] = useState("");
  const data = useLoaderData();
  const [search, setSearch] = useState("");
  // console.log(search);
  const searchText = search.trim().toLocaleLowerCase();
  // console.log(searchText);
  const searchProducts = searchText
    ? data.filter((val) => val.title.toLocaleLowerCase().includes(searchText))
    : data;

  useEffect(() => {
    // simulate a short delay so spinner is visible
    const timer = setTimeout(() => setLoading(false), 150);
    return () => clearTimeout(timer);
  }, [searchProducts]);

  if (searchText && searchProducts.length === 0) {
    return <AppNotFound></AppNotFound>;
  }
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
            <h1 className="font-semibold text-[24px] ">
              ({data.length}) Total Apps Found
            </h1>
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
              <input
                type="search"
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                  setLoading(true);
                }}
                placeholder="search Apps"
              />
            </label>
          </div>
          <div className="flex justify-center">
            {loading ? (
              <Spinner /> // spinner shows while searching
            ) : (
              <div className="grid grid-cols-4 gap-[30px] ">
                {searchProducts.map((val) => (
                  <SingleApp key={val.id} val={val}></SingleApp>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllApps;

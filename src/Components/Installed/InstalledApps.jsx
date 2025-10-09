import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { getInstalledApp } from "../Apps/addToDB";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import LocalApps from "./LocalApps";

const InstalledApps = () => {
  const [sortOrder, setSortOrder] = useState([]);
  const [installedAppList, setIntalledAppList] = useState([]);
  const data = useLoaderData();
  //   console.log(data);
  useEffect(() => {
    const storedApps = getInstalledApp();
    const convertedInstalledApps = storedApps.map((id) => parseInt(id));
    const myInstalledApps = data.filter((app) =>
      convertedInstalledApps.includes(app.id)
    );
    setIntalledAppList(myInstalledApps);
  }, [data]);

  // const reloadData = () => {
  //   const storedApps = getInstalledApp();
  //   const convertedInstalledApps = storedApps.map((id) => parseInt(id));
  //   const myInstalledApps = data.filter((app) =>
  //     convertedInstalledApps.includes(app.id)
  //   );
  //   setIntalledAppList(myInstalledApps);
  // };

  const sortedItem = () => {
    if (sortOrder === "download-asc") {
      return [...installedAppList].sort((a, b) => a.downloads - b.downloads);
    } else if (sortOrder === "download-dsc") {
      return [...installedAppList].sort((a, b) => b.downloads - a.downloads);
    } else {
      return installedAppList;
    }
  };

  return (
    <div className="bg-[#E9E9E9]  flex flex-col items-center">
      <Navbar></Navbar>
      <div className="min-h-[452px] text-[#001931] max-w-[1440px] w-full">
        <div className="flex flex-col items-center mt-[80px] mb-[40px]">
          <h1 className="font-bold text-[48px]">Your Installed Apps</h1>
          <p className="text-[#627382] text-[20px] mt-[16px]">
            Explore All Trending Apps on the Market developed by us
          </p>
        </div>
        <div className="flex justify-between text-[20px] font-medium">
          <p>{installedAppList.length} Apps Found</p>
          <label className="form-control w-full  max-w-xs">
            <select
              className="select select-border bg-white "
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
            >
              <option value="none">Sort by downloads</option>
              <option value="download-asc">Low to high</option>
              <option value="download-dsc">High to low</option>
            </select>
          </label>
        </div>
        <div className="mb-[80px]">
          {sortedItem().map((data) => (
            <LocalApps key={data.id} data={data}></LocalApps>
          ))}
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default InstalledApps;

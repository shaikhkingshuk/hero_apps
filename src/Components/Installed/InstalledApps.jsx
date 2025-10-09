import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { getInstalledApp } from "../Apps/addToDB";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import LocalApps from "./LocalApps";

const InstalledApps = () => {
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
  }, []);

  const reloadData = () => {
    const storedApps = getInstalledApp();
    const convertedInstalledApps = storedApps.map((id) => parseInt(id));
    const myInstalledApps = data.filter((app) =>
      convertedInstalledApps.includes(app.id)
    );
    setIntalledAppList(myInstalledApps);
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
        <div className="mb-[80px]">
          {installedAppList.map((data) => (
            <LocalApps data={data} reloadData={reloadData}></LocalApps>
          ))}
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default InstalledApps;

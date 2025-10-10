import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Chart from "./Chart";
import { addToStoredDB, getInstalledApp } from "./addToDB";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

const AppDetails = () => {
  const [installedApp, setInstalledApp] = useState(false);
  const data = useLoaderData();
  const { id } = useParams();
  const currentProduct = data.find((val) => String(val.id) === id);
  // console.log(currentProduct);

  useEffect(() => {
    const installedApp = getInstalledApp();
    // console.log()
    if (installedApp.includes(currentProduct.id)) {
      setInstalledApp(true);
    } else {
      setInstalledApp(false);
    }
  }, [currentProduct.id]);

  const handleInstalled = (id) => {
    toast.success("App Installed Succesfully...");
    // console.log(id);
    addToStoredDB(id);
    const installedApp = getInstalledApp();
    // console.log(installedApp);
    // console.log(currentProduct.id);
    if (installedApp.includes(currentProduct.id)) {
      setInstalledApp(true);
      // console.log("aaaaaaaaa");
    } else {
      setInstalledApp(false);
    }
  };

  // const handleUninstalled = (id) => {
  //   removeFromStore(id);
  // };

  return (
    <div className="bg-[#E9E9E9]">
      <Navbar></Navbar>
      <div className="flex justify-center bg-[#E9E9E9] text-black mt-[40px] md:mt-[80px]">
        <div className="bg-[#E9E9E9] text-black max-w-[1440px] w-full">
          <div className="h-auto flex flex-col md:flex-row mb-[60px] md:mb-[0px] md:gap-[90px] ">
            <div className=" flex justify-center lg:justify-start p-[10px]">
              <img
                src={currentProduct.image}
                className="h-full w-[300px] md:w-[400px]"
                alt=""
              />
            </div>
            <div className="flex flex-col justify-between md:items-start items-center  mt-[30px] md:mt-[0px] p-[10px] ">
              <div className=" border-b-2 border-gray-300 ">
                <h1 className="text-[32px] font-bold">
                  App: {currentProduct.title}
                </h1>
                <p className="font-semibold text-[20px] text-[#627382]">
                  Developed by
                  <span className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent font-bold">
                    productive.io
                  </span>
                </p>
              </div>
              <div className="flex flex-row  my-[20px] ">
                <div className="p-[10px]  flex flex-col justify-between items-start ">
                  <img
                    src="/images/icon-downloads.png"
                    className="h-[40px]"
                  ></img>
                  <p>Downloads</p>
                  <p className="md:font-bold font-semibold text-[40px]">
                    {currentProduct.shortDownload}
                  </p>
                </div>
                <div className="p-[10px] ml-[10px]  flex flex-col justify-between items-start ">
                  <img
                    src="/images/icon-ratings.png"
                    className="h-[40px]"
                  ></img>
                  <p>Average Ratings</p>
                  <p className="md:font-bold font-semibold text-[40px]">
                    {currentProduct.ratingAvg}
                  </p>
                </div>
                <div className="p-[10px] ml-[10px] flex flex-col justify-between items-start ">
                  <img src="/images/icon-review.png" className="h-[40px]"></img>
                  <p>Total Reviews</p>
                  <p className="md:font-bold font-semibold text-[40px]">
                    {currentProduct.shortReview}
                  </p>
                </div>
              </div>
              <div className=" font-semibold ">
                <button
                  disabled={installedApp}
                  onClick={() => handleInstalled(currentProduct.id)}
                  className={`text-[20px] text-white p-[10px] rounded-sm
    ${
      installedApp
        ? "bg-gray-600 cursor-not-allowed"
        : "bg-green-600 hover:bg-green-700"
    }
  `}
                >
                  {installedApp ? "Installed" : "Install"}({currentProduct.size}
                  MB)
                </button>
                <ToastContainer />
              </div>
            </div>
          </div>
          <div className="mt-[80px] border-t-2 border-gray-300 ">
            <p className="text-[24px] font-semibold mb-[24px]">Ratings</p>
            <Chart data={currentProduct.ratings}></Chart>
          </div>
          <div className="my-[80px]">
            <h1 className="mb-[28px] text-[24px] font-semibold  text-[#001931]">
              Description
            </h1>
            <p className="text-[20px] text-[#627382]">
              {currentProduct.description}
            </p>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default AppDetails;

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
      <div className="flex justify-center bg-[#E9E9E9] text-black mt-[80px]">
        <div className="bg-[#E9E9E9] text-black max-w-[1440px] w-full">
          <div className="h-[341px] flex gap-[90px]">
            <div>
              <img
                src={currentProduct.image}
                className="h-full w-full"
                alt=""
              />
            </div>
            <div className="flex flex-col justify-between   ">
              <div className=" border-b-2 border-gray-300 ">
                <h1 className="text-[32px] font-bold">
                  App: {currentProduct.title}
                </h1>
                <p className="font-semibold text-[20px] text-[#627382]">
                  Developed by
                  <span className="text-[#632EE3]">productive.io</span>
                </p>
              </div>
              <div className="flex gap-[50px] ">
                <div className="h-[120px] w-[150px] flex flex-col justify-between items-start">
                  <img
                    src="/images/icon-downloads.png"
                    className="h-[40px]"
                  ></img>
                  <p>Downloads</p>
                  <p className="font-bold text-[40px]">
                    {currentProduct.shortDownload}
                  </p>
                </div>
                <div className="h-[120px] w-[150px] flex flex-col justify-between items-start">
                  <img
                    src="/images/icon-ratings.png"
                    className="h-[40px]"
                  ></img>
                  <p>Average Ratings</p>
                  <p className="font-bold text-[40px]">
                    {currentProduct.ratingAvg}
                  </p>
                </div>
                <div className="h-[120px] w-[150px] flex flex-col justify-between items-start ">
                  <img src="/images/icon-review.png" className="h-[40px]"></img>
                  <p>Total Reviews</p>
                  <p className="font-bold text-[40px]">
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

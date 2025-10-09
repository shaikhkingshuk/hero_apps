import React from "react";
import { useLoaderData, useParams } from "react-router";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Chart from "./Chart";
import { addToStoredDB } from "./addToDB";

const AppDetails = () => {
  const data = useLoaderData();
  const { id } = useParams();
  const currentProduct = data.find((val) => String(val.id) === id);
  // console.log(currentProduct);

  const handleInstalled = (id) => {
    // console.log(id);
    addToStoredDB(id);
  };

  return (
    <div className="bg-[#E9E9E9]">
      <Navbar></Navbar>
      <div className="flex justify-center bg-[#E9E9E9] text-black mt-[80px]">
        <div className="bg-[#E9E9E9] text-black max-w-[1440px] w-full">
          <div className="h-[341px] flex gap-[90px]">
            <div className="">
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
                  onClick={() => handleInstalled(currentProduct.id)}
                  className="text-[20px] text-white btn btn-success"
                >
                  Install Now ({currentProduct.size}MB)
                </button>
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

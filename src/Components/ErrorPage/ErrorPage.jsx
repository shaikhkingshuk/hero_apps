import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { useNavigate } from "react-router";

const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-[#E9E9E9] ">
      <Navbar></Navbar>
      <div className="h-[452px] w-full flex flex-col items-center">
        <div className="h-[200px] mt-[40px]">
          <img src="/images/error-404.png" className="h-full"></img>
        </div>
        <div className="flex flex-col items-center">
          <h1 className="font-semibold text-[48px] text-[#001931]">
            Oops, page not found!
          </h1>
          <p className="text-[20px] text-[#627382]">
            The page you are looking for is not available.
          </p>
        </div>
        <div className="mt-[20px]">
          <button
            onClick={() => navigate(-1)}
            className="btn bg-[#632EE3] border-none"
          >
            Go Back
          </button>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default ErrorPage;

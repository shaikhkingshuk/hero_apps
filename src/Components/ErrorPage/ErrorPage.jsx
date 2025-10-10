import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { useNavigate } from "react-router";

const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <div className="h-full w-full bg-[#E9E9E9] flex flex-col flex-1 justify-between">
      <Navbar></Navbar>
      <div className="h-auto w-full flex flex-col items-center ">
        <div className="w-full mt-[10px] flex justify-center">
          <img src="/images/error-404.png" className="h-full"></img>
        </div>
        <div className="flex flex-col items-center mt-[10px]">
          <h1 className="font-semibold text-[48px] text-[#001931] text-center">
            Oops, page not found!
          </h1>
          <p className="text-[20px] text-[#627382] text-center">
            The page you are looking for is not available.
          </p>
        </div>
        <div className="mt-[20px] mb-[40px]">
          <button
            onClick={() => navigate(-1)}
            className="btn bg-[#632EE3] border-none bg-gradient-to-r from-[#632EE3] to-[#9F62F2]"
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

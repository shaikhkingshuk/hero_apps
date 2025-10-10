import React from "react";
import { Link, useNavigate } from "react-router";

const AppNotFound = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="bg-[#E9E9E9] h-full flex flex-col items-center ">
        <div className="mt-[60px]">
          <img src="/images/App-Error.png" className="w-full "></img>
        </div>
        <div className="mt-[8px]">
          <h1 className="text-center text-[48px] font-semibold text-[#001931]">
            OPPS!! APP NOT FOUND
          </h1>
        </div>
        <div className="mt-[8px]">
          <p className="text-center text-[#627382] text-[20px] ">
            The App you are requesting is not found on our system. please try
            another apps
          </p>
        </div>
        <div className=" mt-[20px] mb-[40px]">
          <Link
            onClick={() => navigate(0)}
            className="border-none btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] font-semibold text-[16px] "
          >
            Go Back
          </Link>
        </div>
      </div>
    </>
  );
};

export default AppNotFound;

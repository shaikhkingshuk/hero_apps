import React from "react";
import { Link, useNavigate } from "react-router";

const AppNotFound = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="bg-white h-[452px] flex flex-col items-center ">
        <img src="/images/App-Error.png" className="w-[200px] mt-[60px]"></img>
        <h1 className="text-[48px] font-semibold text-[#001931] mt-[8px]">
          OPPS!! APP NOT FOUND
        </h1>
        <p className="text-[#627382] text-[20px] mt-[8px]">
          The App you are requesting is not found on our system. please try
          another apps
        </p>
        <Link
          onClick={() => navigate(0)}
          className="border-none btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] font-semibold text-[16px] mt-[20px]"
        >
          Go Back
        </Link>
      </div>
    </>
  );
};

export default AppNotFound;

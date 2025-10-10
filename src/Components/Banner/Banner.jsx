import React from "react";
import { Link } from "react-router";

const Banner = () => {
  return (
    <div className="w-full h-auto flex items-center flex-col bg-[#E9E9E9] flex-1">
      <div>
        <div className="flex flex-col items-center mt-[80px]">
          <div>
            <h1 className="text-center text-[50px] md:text-[72px] font-bold text-black">
              We Build<br></br>
              <span className="font-black bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
                Productive
              </span>{" "}
              Apps
            </h1>
          </div>
          <div>
            <p className="text-center text-[20px] text-[#627382] mt-[16px]">
              At HERO.IO , we craft innovative apps designed to make everyday
              life simpler, smarter, and more exciting.<br></br>Our goal is to
              turn your ideas into digital experiences that truly make an
              impact.
            </p>
          </div>
        </div>
        <div className="flex justify-center mt-[40px] gap-[20px] mb-[40px]">
          <Link
            to="https://play.google.com/"
            className="btn bg-[#E9E9E9] text-black border-2 border-[#D2D2D2]"
          >
            <img src="/images/play-store-logo.png " className="h-[20px]"></img>
            Google Play
          </Link>
          <Link
            to="https://www.apple.com/app-store/"
            className="btn bg-[#E9E9E9] text-black border-2 border-[#D2D2D2]"
          >
            <img src="/images/app-store-logo.png " className="h-[20px]"></img>
            App Store
          </Link>
        </div>
      </div>
      <div className="h-full">
        <img src="/images/hero.png" className="h-full min-h-[300px]"></img>
      </div>
    </div>
  );
};

export default Banner;

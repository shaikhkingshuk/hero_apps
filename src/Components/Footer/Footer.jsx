import React from "react";
import { Link } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="h-[183px] w-full bg-[#001931] flex flex-col justify-center items-center">
      <div className="flex justify-between items-center h-[64px] w-8/9 ">
        <div>
          <Link to="/" className="btn btn-ghost text-l">
            <img src="/images/logo.png" className="h-[20px]"></img> HERO.IO
          </Link>
        </div>
        <div className="mr-[10px]">
          <Link to="https://www.facebook.com/kingshuk.shaikh/">
            Social Links: <FontAwesomeIcon icon={faFacebook} />
          </Link>
        </div>
      </div>
      <div className="h-[54px] flex justify-center items-end  w-8/9 border-t-2 border-gray ">
        <p>Copyright © 2025 - All right reserved</p>
      </div>
    </div>
  );
};

export default Footer;

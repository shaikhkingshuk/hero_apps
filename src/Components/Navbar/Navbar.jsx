import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { Link, NavLink } from "react-router";

const Navbar = () => {
  return (
    <div className="navbar bg-[#FFFFFF] text-black shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow text-[16px] font-medium"
          >
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "text-[#632EE3] underline" : ""
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/allApps"
                className={({ isActive }) =>
                  isActive ? "text-[#632EE3] underline" : ""
                }
              >
                Apps
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "text-[#632EE3] underline" : ""
                }
              >
                Installation
              </NavLink>
            </li>
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost text-xl">
          <img src="/images/logo.png" className="h-[25px]"></img> HERO.IO
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-[16px] font-medium">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-[#632EE3] underline" : ""
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/allApps"
              className={({ isActive }) =>
                isActive ? "text-[#632EE3] underline" : ""
              }
            >
              Apps
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-[#632EE3] underline" : ""
              }
            >
              Installation
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <Link
          to="https://github.com/shaikhkingshuk"
          className="border-none btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] font-semibold text-[16px]"
        >
          <FontAwesomeIcon icon={faGithub} /> Contribute
        </Link>
      </div>
    </div>
  );
};

export default Navbar;

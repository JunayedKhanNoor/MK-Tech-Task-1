import React from "react";
import CustomLink from "./CustomLink";

const Navbar = () => {
    const menuItems = (
        <>
          <li>
            <CustomLink to="/">Home</CustomLink>
          </li>
          <li>
            <CustomLink to="/advertisement">ADVERTISERS</CustomLink>
          </li>
          <li>
            <CustomLink to="/publishers">PUBLISHERS</CustomLink>
          </li>
          <li>
            <CustomLink to="/influencer">INFLUENCERS</CustomLink>
          </li>
          <li>
            <CustomLink to="/formats">AD FORMATS</CustomLink>
          </li>
          <li>
            <CustomLink to="/blog">BLOG</CustomLink>
          </li>
          <li>
            <CustomLink to="/contact">CONTACT US</CustomLink>
          </li>
        </>
      );
  return (
    <div className="w-full px-8 md:px-16">
      <div className=" flex justify-between navbar bg-base-100 p-0 m-0">
        <div className="navbar-start md:hidden">
          <div className="dropdown">
            <label tabIndex="0" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeWnejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex="0"
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box "
            >
              {menuItems}
            </ul>
          </div>
        </div>
        <div className="navbar-center  hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
          {menuItems}
          </ul>
        </div>
        <div className="navbar-end">
          <div className="uppercase flex justify-between items-center bg-white p-2 rounded-full shadow-2xl">
              <p role='button' className="mx-3 md:mx-9">Login</p>
              <p role='button' className="bg-primary px-2 md:px-6 rounded-full shadow-2xl text-white py-1 md:py-2">Sign Up</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

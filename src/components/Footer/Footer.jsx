import React from "react";
import { Link } from "react-router";
import logo from "../../assets/logo-footer.png";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="relative w-full h-full bg-black py-[100px]">
      <div className="max-w-[1280px] mx-auto flex flex-col justify-center items-center gap-5 pb-5 border-b border-gray-600 border-dashed">
        <div className="flex justify-center items-center gap-2.5">
          <img src={logo} alt="Low.bd" />
          <Link to="/" className="text-2xl text-white font-bold">
            Law.bd
          </Link>
        </div>

        <ul className="menu menu-horizontal px-1">
          <li className="text-white text-base font-medium">
            <Link to="/">Home</Link>
          </li>
          <li className="text-white text-base font-medium">
            <Link>My Booking</Link>
          </li>
          <li className="text-white text-base font-medium">
            <Link>Blogs</Link>
          </li>
          <li className="text-white text-base font-medium">
            <Link>Contact Us</Link>
          </li>
        </ul>
      </div>

      <div className="max-w-[1280px] mx-auto flex flex-col justify-center items-center pt-5">
        <div className="flex justify-center items-center gap-5">
          <Link to="">
            <FaFacebook size={20} className="text-blue-600"></FaFacebook>
          </Link>
          <Link to="">
            <BsTwitterX size={20} className="text-white"></BsTwitterX>
          </Link>
          <Link to="">
            <FaLinkedin size={20} className="text-blue-700"></FaLinkedin>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;

import { Link } from "react-router";
import logo from "../../assets/logo.png";

const Header = () => {
  return (
    <div className="w-ful bg-white">
      <div className="navbar max-w-[1280px] mx-auto">
        <div className="navbar-start flex justify-start items-center gap-2.5">
          <img src={logo} alt="Low.bd" />
          <Link to="/" className="text-2xl text-black font-bold">
            Law.bd
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li className="text-black">
              <Link to="/">Home</Link>
            </li>
            <li className="text-black">
              <Link to="/my-bookings">My Booking</Link>
            </li>
            <li className="text-black">
              <Link to="blogs">Blogs</Link>
            </li>
            <li className="text-black">
              <Link to="contact-us">Contact Us</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <button className="bg-[#0EA106] text-white text-base py-[15px] px-[30px] rounded-full">Contact Now</button>
        </div>
      </div>
    </div>
  );
};

export default Header;

import {
  FaHome,
  FaInfoCircle,
  FaSignInAlt,
  FaCartArrowDown,
} from "react-icons/fa";
import { IoMdHelpBuoy } from "react-icons/io";
import { useState } from "react";
import { Link } from "react-router-dom";

const Title = () => (
  <div className="flex items-center gap-1">
    <a href="/">
      <img
        className="w-16 rounded-3xl"
        src="https://th.bing.com/th/id/OIG4.8ZSNWS0vUF9r1S7XGIeN?pid=ImgGn"
        alt="Logo"
      ></img>
    </a>
    <span className="text-orange-500 text-2xl">KF Villa</span>
  </div>
);

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className="flex justify-between items-center py-2 px-0">
      <Title />
      <nav className="flex items-center gap-7">
        <ul className="flex justify-between gap-10 text-xl">
          <li>
            <Link to="/" className="flex items-center gap-1">
              <FaHome className="text-green-500 text-2xl" />
              Home
            </Link>
          </li>
          <li>
            <Link to="/About" className="flex items-center gap-1">
              <FaInfoCircle className="text-green-500 text-2xl" />
              About
            </Link>
          </li>
          <li>
            <Link to="/Help" className="flex items-center gap-1">
              <IoMdHelpBuoy className="text-green-500 text-2xl" />
              Help
            </Link>
          </li>
          <li>
            <Link to="/SignIn" className="flex items-center gap-1">
              <FaSignInAlt className="text-green-500 text-2xl" />
              Sign In
            </Link>
          </li>
          <li>
            <Link to="/Cart" className="flex items-center gap-1">
              <FaCartArrowDown className="text-green-500 text-2xl" />
              Cart
            </Link>
          </li>
        </ul>
        {isLoggedIn ? (
          <button
            className="text-[18px] rounded-md bg-green-500 py-1 px-3 w-24"
            onClick={() => setIsLoggedIn(false)}
          >
            Logout
          </button>
        ) : (
          <button
            className="text-[18px] rounded-md bg-green-500 py-1 px-3 w-24"
            onClick={() => setIsLoggedIn(true)}
          >
            Login
          </button>
        )}
      </nav>
    </div>
  );
};
export default Header;

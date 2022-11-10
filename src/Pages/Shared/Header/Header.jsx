import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../contacts/AuthProvider/AuthProvider";

const Header = () => {
  const {user}= useContext(AuthContext)
    const menuItem = (
        <>
          <Link className=" text-white btn btn-ghost font-semibold mr-4" to="/">
            Home
          </Link>
          <Link className=" text-white btn btn-ghost font-semibold mr-4" to="/blog">
            Blog
          </Link>
          {user?.email ? (
            <>
              <Link className="font-semibold" to="/reviews">
              Reviews
              </Link>
            </>
          ) : (
            <Link className="font-semibold" to="/login">
              Login
            </Link>
          )}
        </>
      )
  return (
    <div className="navbar h-20 bg-gray-800">
    <div className="navbar-start">
      <div className="dropdown">
        <label tabIndex={0} className="btn btn-ghost lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </label>
        <ul
          tabIndex={0}
          className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
        >
          {menuItem}
        </ul>
      </div>
      <Link to="/" className="btn btn-ghost normal-case text-xl">
        <img src='' alt="" />
      </Link>
    </div>
    <div className="navbar-center hidden lg:flex">
      <ul className="menu menu-horizontal p-0">{menuItem}</ul>
    </div>
    <div className="navbar-end">
      <Link to='/login'><button className="btn btn-outline btn-secondary mr-4">Login</button></Link>
      <Link to='/register'><button className="btn btn-outline btn-secondary">Register</button></Link>
    </div>
  </div>
  );
};

export default Header;

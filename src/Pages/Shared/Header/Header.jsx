import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../contacts/AuthProvider/AuthProvider";
import { FaUserCheck } from "react-icons/fa";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch(() => {});
  };

  const menuItem = (
    <>
      <Link className=" text-white  font-bold mr-4" to="/">
        Home
      </Link>
      <Link className=" text-white font-bold mr-4" to="/blog">
        Blog
      </Link>
      <Link className=" text-white font-bold mr-4" to="/services">
        Services
      </Link>
      {user?.email ? (
        <>
          <Link className=" text-white  font-bold mr-4" to="/addService">
            Add Services
          </Link>
          <Link className=" text-white  font-bold mr-4" to="/myReviews">
            My Reviews
          </Link>
        </>
      ) : (
        <Link className=" text-white font-bold mr-4" to="/login">
          Login
        </Link>
      )}
    </>
  );
  return (
    <div className="navbar h-20 bg-gray-800 px-28">
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
          <h2 className="text-white">Cloud Kitchen</h2>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">{menuItem}</ul>
      </div>
      <div className="navbar-end">
        {user?.email ? (
          <>
            <Link
              onClick={handleLogOut}
              className=" text-white font-bold mr-4"
              to="/login"
            >
              Logout
            </Link>

            <img
              className="rounded-full outline text-white"
              style={{ height: "40px" }}
              src={user?.photoURL}
              alt=""
            />
          </>
        ) : (
          <FaUserCheck className="text-2xl" />
        )}
      </div>
    </div>
  );
};

export default Header;

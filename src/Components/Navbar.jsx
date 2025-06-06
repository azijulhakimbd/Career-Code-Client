import React, { use } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../Contexts/AuthContext";
import Swal from "sweetalert2";
import ThemeToggle from "../Pages/ThemeToggle";

const Navbar = () => {
  const { user, logout } = use(AuthContext);
  const handleLogout = () => {
    logout().then((result) => {
      console.log(result);
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Logout Successfully",
        showConfirmButton: false,
        timer: 1500,
      });
    });
  };
  const links = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      {/* for applicant */}
     {
      user && <>
       <li>
        <NavLink to={"/myapplications"}>My Applications</NavLink>
      </li></>
     }
     {/* for recruit */}
     {
      user &&
      <> <li> <NavLink to={"/addJob"}>Add Job</NavLink>
      </li>
      <li> <NavLink to={"/myPostedJobs"}>My Posted Jobs</NavLink>
      </li></>
     }
      
    </>
  );
  return (
    <div className="navbar bg-base-100 shadow-sm">
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
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 text-success mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <a className="btn btn-ghost text-4xl f1 text-green-500 font-extrabold">Job Hunter</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal text-success px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        <ThemeToggle></ThemeToggle>
        {user ? (
          <button onClick={handleLogout} className="btn bg-red-400">
            Logout
          </button>
        ) : (
          <>
            <Link className="btn bg-blue-500" to={"/register"}>
              Register
            </Link>
            <Link className="btn bg-blue-500" to={"/login"}>
              Login
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;

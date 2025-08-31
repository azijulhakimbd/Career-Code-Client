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
      <li>
        <NavLink to={"/all-jobs"}>All Jobs</NavLink>
      </li>
      {/* for applicant */}
      {user && (
        <li>
          <NavLink to={"/my-applications"}>My Applications</NavLink>
        </li>
      )}

      {/* for recruiter */}
      {user && (
        <>
          <li>
            <NavLink to={"/add-Job"}>Add Job</NavLink>
          </li>
          <li>
            <NavLink to={"/my-Posted-Jobs"}>My Posted Jobs</NavLink>
          </li>
        </>
      )}
         <li>
        <NavLink to={"/about"}>About Us</NavLink>
      </li>
      <li>
        <NavLink to={"/contact"}>Contact</NavLink>
      </li>
    </>
  );

  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-base-100 shadow-sm">
      <div className="navbar container mx-auto">
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
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 text-success mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
         <Link to={"/"}> <a className="btn btn-ghost text-4xl f1 text-green-500 font-extrabold">
            Job Hunter
          </a></Link>
        </div>

        {/* Center Nav */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal text-success px-1">{links}</ul>
        </div>

        {/* Right Side */}
        <div className="navbar-end gap-2">
          <ThemeToggle />
          {user ? (
            <button onClick={handleLogout} className="btn bg-red-400">
              Logout
            </button>
          ) : (
            <>
              <Link className="btn btn-primary" to={"/register"}>
                Register
              </Link>
              <Link className="btn btn-primary" to={"/login"}>
                Login
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;

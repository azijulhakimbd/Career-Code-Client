import Lottie from "lottie-react";
import React, { useContext } from "react";
import { Link } from "react-router";
import registerAnimation from "../assets/Lotties/Register.json";
import { AuthContext } from "../Contexts/AuthContext";
import Swal from "sweetalert2";
const Register = () => {
  const { createUser } = useContext(AuthContext);
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    // const name=form.name.value;
    // const photo =form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    createUser(email, password).then((result) => {
      const user = result.user;
      console.log(user);
      Swal.fire({
        title: "Register Successfully",
        icon: "success",
        draggable: true,
      });
    });
  };
  return (
    <div className="overflow-hidden bg-gray-900 min-h-screen my-auto">
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="flex flex-col items-center justify-between xl:flex-row">
          <div className="w-full max-w-xl mb-12 xl:pr-16 xl:mb-0 xl:w-7/12">
            <Lottie animationData={registerAnimation} loop={true}></Lottie>
          </div>
          <div className="w-full max-w-xl xl:px-8 xl:w-5/12">
            <div className="relative">
              <svg
                viewBox="0 0 52 24"
                fill="currentColor"
                className="absolute bottom-0 right-0 z-0 hidden w-32 -mb-8 -mr-20 text-teal-accent-400 lg:w-32 lg:-mr-16 sm:block"
              >
                <defs>
                  <pattern
                    id="766323e1-e594-4ffd-a688-e7275079d540"
                    x="0"
                    y="0"
                    width=".135"
                    height=".30"
                  >
                    <circle cx="1" cy="1" r=".7" />
                  </pattern>
                </defs>
                <rect
                  fill="url(#766323e1-e594-4ffd-a688-e7275079d540)"
                  width="52"
                  height="24"
                />
              </svg>
              <div className="relative bg-blue-600 rounded shadow-2xl p-7 sm:p-10">
                <h3 className="mb-4 text-xl font-semibold sm:text-center sm:mb-6 sm:text-2xl">
                  Register
                </h3>
                <form onSubmit={handleRegister}>
                  {/* Name */}
                  <div className="mb-1 sm:mb-2">
                    <label
                      htmlFor="name"
                      className="inline-block mb-1 font-medium"
                    >
                      Name
                    </label>
                    <input
                      placeholder="John Doe"
                      required
                      type="text"
                      className="flex-grow w-full h-12 px-4 mb-2 transition duration-200  border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                      id="name"
                      name="name"
                    />
                  </div>
                  {/* Photo URL */}
                  <div className="mb-1 sm:mb-2">
                    <label
                      htmlFor="photo"
                      className="inline-block mb-1 font-medium"
                    >
                      Photo URL
                    </label>
                    <input
                      placeholder="Photo URL"
                      required
                      type="text"
                      className="flex-grow w-full h-12 px-4 mb-2 transition duration-200  border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                      id="photo"
                      name="photo"
                    />
                  </div>
                  {/* Email */}
                  <div className="mb-1 sm:mb-2">
                    <label
                      htmlFor="email"
                      className="inline-block mb-1 font-medium"
                    >
                      E-mail
                    </label>
                    <input
                      placeholder="john.doe@example.org"
                      required
                      type="text"
                      className="flex-grow w-full h-12 px-4 mb-2 transition duration-200  border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                      id="email"
                      name="email"
                    />
                  </div>
                  {/* Password */}
                  <div className="mb-1 sm:mb-2">
                    <label
                      htmlFor="password"
                      className="inline-block mb-1 font-medium"
                    >
                      Password
                    </label>
                    <input
                      placeholder="*********"
                      required
                      type="password"
                      className="flex-grow w-full h-12 px-4 mb-2 transition duration-200  border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                      id="password"
                      name="password"
                    />
                  </div>

                  <div className="mt-4 mb-2 sm:mb-4">
                    <button
                      type="submit"
                      className="inline-flex items-center bg-blue-400 justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                    >
                      Register
                    </button>
                  </div>
                </form>
                <p className="text-sm text-center p-2 text-white">
                  <span className="p-1">Already have an account? </span>
                  <Link
                    to={"/login"}
                    className="hover:underline text-[#cc1f1f]"
                  >
                    Login
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;

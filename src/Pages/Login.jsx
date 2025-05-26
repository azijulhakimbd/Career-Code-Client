import React, { use } from "react";
import { Link } from "react-router";
import loginAnimation from "../assets/Lotties/Login.json";
import Lottie from "lottie-react";
import { AuthContext } from "../Contexts/AuthContext";
import Swal from "sweetalert2";
const Login = () => {
  const {signIn}=use(AuthContext)
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    signIn(email,password)
    .then(result=>{
      console.log(result.user);
      Swal.fire({
  title: "Login Successfully",
  icon: "success",
  draggable: true
});
      
    })
  };
  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2 mx-auto  bg-gray-900">
      <div className="mx-auto w-1/4 lg:py-15">
        <Lottie
          animationData={loginAnimation}
          style={{ width: "400px" }}
          loop={true}
        ></Lottie>
      </div>
      <div className="flex flex-col w-2/4  rounded-md sm:p-10">
        <div className="mb-8 text-center">
          <h1 className="my-3 text-4xl font-bold">Login</h1>
          <p className="text-sm dark:text-gray-600">
            Login to access your account
          </p>
        </div>
        <form onSubmit={handleLogin} className="space-y-12">
          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="block mb-2 text-sm">
                Email address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="leroy@jenkins.com"
                className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
              />
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <label htmlFor="password" className="text-sm">
                  Password
                </label>
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="text-xs hover:underline dark:text-gray-600"
                >
                  Forgot password?
                </a>
              </div>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="*****"
                className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
              />
            </div>
          </div>
          <div className="space-y-2">
            <div>
              <button
                type="submit"
                className="w-full px-8 py-3 font-semibold rounded-md dark:bg-fuchsia-600 dark:text-gray-50"
              >
                Login
              </button>
            </div>
            <p className="px-6 text-sm text-center dark:text-gray-600">
              Don't have an account yet?
              <Link
                to={"/register"}
                className="hover:underline dark:text-fuchsia-600"
              >
                Register
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;

import React, { useContext } from "react";
import { Link } from "react-router";
import loginAnimation from "../assets/Lotties/Login.json";
import Lottie from "lottie-react";
import { AuthContext } from "../Contexts/AuthContext";
import Swal from "sweetalert2";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const { signIn, loginWithGoogle } = useContext(AuthContext);

  const handleGoogleLogin = () => {
    loginWithGoogle()
      .then((result) => {
        console.log(result.user);
        Swal.fire({
          title: "Google Login Successfully",
          icon: "success",
          draggable: true,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password).then((result) => {
      Swal.fire({
        title: "Login Successfully",
        icon: "success",
        draggable: true,
      });
    });
  };

  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2 bg-base-200 text-base-content">
      <div className="flex justify-center items-center">
        <Lottie
          animationData={loginAnimation}
          style={{ width: "400px" }}
          loop={true}
        />
      </div>

      <div className="flex flex-col justify-center items-center px-6 py-10">
        <div className="w-full max-w-md bg-base-100 p-8 rounded-md shadow-xl">
          <div className="mb-6 text-center">
            <h1 className="text-3xl font-bold">Login</h1>
            <p className="text-sm">Login to access your account</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label htmlFor="email" className="block mb-1 text-sm">
                Email address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="john@example.com"
                className="input input-bordered w-full"
                required
              />
            </div>

            <div>
              <label htmlFor="password" className="block mb-1 text-sm">
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="••••••••"
                className="input input-bordered w-full"
                required
              />
            </div>

            <button type="submit" className="btn btn-primary w-full">
              Login
            </button>
          </form>

          <div className="mt-4 text-center text-sm">
            Don’t have an account?{" "}
            <Link to="/register" className="text-primary hover:underline">
              Register
            </Link>
          </div>

          <div className="divider">OR</div>

          <button
            onClick={handleGoogleLogin}
            className="btn btn-outline w-full"
          >
            <FcGoogle size={24} />
            Login with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;

import Lottie from "lottie-react";
import React, { useContext } from "react";
import { Link } from "react-router";
import registerAnimation from "../assets/Lotties/Register.json";
import { AuthContext } from "../Contexts/AuthContext";
import Swal from "sweetalert2";
import { FcGoogle } from "react-icons/fc";

const Register = () => {
  const { createUser, loginWithGoogle } = useContext(AuthContext);

  const handleGoogleLogin = () => {
    loginWithGoogle()
      .then((result) => {
        console.log(result.user);
        Swal.fire({
          title: "Google Login Successful",
          icon: "success",
        });
      })
      .catch((error) => console.error(error));
  };

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    createUser(email, password).then((result) => {
      Swal.fire({
        title: "Registered Successfully",
        icon: "success",
      });
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200">
      <div className="flex flex-col lg:flex-row-reverse items-center gap-10 p-6 w-full max-w-6xl">
        <div className="w-full lg:w-1/2">
          <Lottie animationData={registerAnimation} loop />
        </div>

        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <h2 className="text-2xl font-bold text-center">Register</h2>

            <form onSubmit={handleRegister}>
              <div className="form-control">
                <label className="label">Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="John Doe"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">Photo URL</label>
                <input
                  type="text"
                  name="photo"
                  placeholder="https://example.com/photo.jpg"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="john@example.com"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">Password</label>
                <input
                  type="password"
                  name="password"
                  placeholder="********"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control mt-6">
                <button type="submit" className="btn btn-primary w-full">
                  Register
                </button>
              </div>
            </form>

            <p className="mt-4 text-center">
              Already have an account?{" "}
              <Link to="/login" className="text-primary hover:underline">
                Login
              </Link>
            </p>

            <div className="divider">OR</div>

            <button
              onClick={handleGoogleLogin}
              className="btn btn-outline w-full flex items-center gap-2"
            >
              <FcGoogle size={24} />
              Login with Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;

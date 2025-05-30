import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const ErrorPages = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-base-100 text-center p-4">
      <DotLottieReact
        src="https://lottie.host/ca41032d-4f09-4b55-aa3a-6086e9457278/tkfog0CJdd.lottie"
        loop
        autoplay
      />
      <h1 className="text-5xl font-bold text-error mt-4">404</h1>
      <p className="text-lg text-base-content mt-2">
        Oops! The page you're looking for doesn't exist.
      </p>
      <button
        className="btn btn-primary mt-6"
        onClick={() => (window.location.href = "/")}
      >
        Back to Home
      </button>
    </div>
  );
};

export default ErrorPages;

import React, { Suspense } from "react";
import Banner from "../Components/Banner";
import Contact from "../Components/Contact";
import OurClient from "../Components/OurClient";
import HotJobs from "../Components/HotJobs";

const Home = () => {
  const jobsPromise = fetch(
    "https://career-code-server-rouge.vercel.app/jobs"
  ).then((res) => res.json());
  return (
    <div>
      <Banner />
      <Suspense
        fallback={
          <div className="min-h-screen flex justify-center items-center">
            <span className="loading loading-ring loading-xl"></span>
          </div>
        }
      >
        <HotJobs jobsPromise={jobsPromise}></HotJobs>
      </Suspense>
      <OurClient />
      <Contact />
    </div>
  );
};

export default Home;

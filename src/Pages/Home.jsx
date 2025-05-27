import React, { Suspense } from "react";
import Banner from "../Components/Banner";
import Contact from "../Components/Contact";
import OurClient from "../Components/OurClient";
import HotJobs from "../Components/HotJobs";

const Home = () => {
  const jobsPromise =fetch('http://localhost:3000/jobs').then(res => res.json())
  return (
    <div>
      <Banner />
      <Suspense fallback={<div>Loading jobs...</div>}>
        <HotJobs jobsPromise={jobsPromise}></HotJobs>
      </Suspense>
      <OurClient />
      <Contact />
    </div>
  );
};

export default Home;

import React, { Suspense } from "react";
import JobsList from "../Components/JobsList";
import { jobsCreatedByPromise } from "../API/JobsApi";
import UseAuth from "../Hooks/UseAuth";

const MyPostedJobs = () => {
  const { user } = UseAuth();
  return (
    <div className="min-h-screen py-10 lg:py-25">
      <Suspense
        fallback={
          <div className="min-h-screen flex justify-center items-center">
            <span className="loading loading-ring loading-xl"></span>
          </div>
        }
      >
        <JobsList
          jobsCreatedByPromise={jobsCreatedByPromise(user.email)}
        ></JobsList>
      </Suspense>
    </div>
  );
};

export default MyPostedJobs;

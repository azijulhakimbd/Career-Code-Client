import React, { Suspense } from "react";
import JobsList from "../Components/JobsList";
import { jobsCreatedByPromise } from "../API/JobsApi";
import UseAuth from "../Hooks/UseAuth";

const MyPostedJobs = () => {
    const {user}= UseAuth();
  return (
    <div className="min-h-screen">
      <h2 className="text-center py-20 text-4xl text-success font-bold">
        My Posted Jobs:
      </h2>
      <Suspense
        fallback={
          <div className="min-h-screen flex justify-center items-center">
            <span className="loading loading-ring loading-xl"></span>
          </div>
        }
      >
        <JobsList jobsCreatedByPromise={jobsCreatedByPromise(user.email)}></JobsList>
      </Suspense>
    </div>
  );
};

export default MyPostedJobs;

import React, { use } from "react";
import JobsCard from "./JobsCard";

const HotJobs = ({ jobsPromise }) => {
  const jobs = use(jobsPromise);

  return (
    <div>
      <h1 className="text-center text-4xl font-bold py-20 text-green-500">
        Hot Jobs of the Day
      </h1>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {jobs.map((job) => (
          <JobsCard key={job._id} job={job}></JobsCard>
        ))}
      </div>
    </div>
  );
};

export default HotJobs;

import React, { use } from "react";
import JobsCard from "./JobsCard";

const HotJobs = ({ jobsPromise }) => {
  const jobs = use(jobsPromise);

  return (
    <section className="container mx-auto px-4 py-16">
      <h1 className="text-center text-3xl md:text-4xl font-bold mb-10 text-green-500">
        Hot Jobs of the Day
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {jobs.map((job) => (
          <JobsCard key={job._id} job={job} />
        ))}
      </div>
    </section>
  );
};

export default HotJobs;

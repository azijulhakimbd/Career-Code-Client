import React, { useEffect, useState } from "react";
import JobsCard from "../Components/JobsCard";


const AllJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://career-code-server-rouge.vercel.app/jobs") 
      .then((res) => res.json())
      .then((data) => {
        setJobs(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching jobs:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <p className="text-center text-xl py-10 font-semibold text-green-600">
        Loading Jobs...
      </p>
    );
  }

  return (
    <div>
      <h1 className="text-center text-4xl font-bold py-25 text-green-500">
        All Jobs
      </h1>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 px-5">
        {jobs.length > 0 ? (
          jobs.map((job) => <JobsCard key={job._id} job={job} />)
        ) : (
          <p className="text-center text-gray-500 col-span-full">
            No jobs available right now.
          </p>
        )}
      </div>
    </div>
  );
};

export default AllJobs;

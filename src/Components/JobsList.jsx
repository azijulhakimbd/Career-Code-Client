import React, { use } from "react";
import { Link } from "react-router";
const JobsList = ({ jobsCreatedByPromise }) => {
  const jobs = use(jobsCreatedByPromise);

  return (
    <div className="w-11/12 mx-auto">
      <h2 className="text-3xl text-center text-warning py-10">
        Jobs Created by You: {jobs.length}
      </h2>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Jobs Title</th>
              <th>Application Deadline</th>
              <th>Apply</th>
            </tr>
          </thead>
          <tbody>
            {jobs.map((job, index) => (
              <tr key={job._id}>
                <th>{index + 1}</th>
                <td>{job.title}</td>
                <td>{job.applicationDeadline}</td>
                <td>
                  <Link
                    className="btn btn-success"
                    to={`/applications/${job._id}`}
                  >
                    View Applications
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default JobsList;

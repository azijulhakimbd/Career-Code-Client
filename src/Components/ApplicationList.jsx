import React, { use } from "react";
import ApplicationsData from "./ApplicationsData";

const ApplicationList = ({ myApplicationPromise }) => {
  const applications = use(myApplicationPromise);
  console.log(applications);

  return (
    <div className="w-11/12 mx-auto min-h-screen">
      <h2 className="text-center py-5 text-success font-bold text-4xl">
        Applied jobs :{applications.length}
      </h2>
      <div className="overflow-x-auto ">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>#</label>
              </th>
              <th>Apply Company Name</th>
              <th>Job Title</th>
              <th>Job Deadline</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {applications.map((application, index) => (
              <ApplicationsData
                index={index}
                key={application._id}
                application={application}
              ></ApplicationsData>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ApplicationList;

import axios from "axios";
import React from "react";
import { useLoaderData, useParams } from "react-router";

const ViewApplications = () => {
  const { job_id } = useParams();
  const applications = useLoaderData();
  const handleStatusChange = (e, application) => {
    console.log(e.target.value,application);
    
    axios.patch(``, { status: e.target.value }).then((res) => {
      console.log(res.data);
    })
    .catch(error=>{
        console.log(error);
        
    });
  };

  return (
    <div className="min-h-screen py-10 w-11/12 mx-auto">
      <h2 className="text-4xl text-center text-info py-10">
        {applications.length} Applications for: {job_id}
      </h2>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Applicant Email</th>
              <th>Job</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {/* rows  */}
            {applications.map((application, index) => (
              <tr key={application._id} className="bg-base-200">
                <th>{index + 1}</th>
                <td>{application.applicant}</td>
                <td>Quality Control Specialist</td>
                <td>
                  <select
                    onChange={(e) => handleStatusChange(e, application._id)}
                    defaultValue={application.status}
                    className="select"
                  >
                    <option disabled={true}>Update Status</option>
                    <option>Pending</option>
                    <option>Interview</option>
                    <option>Hired</option>
                    <option>Rejected</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewApplications;

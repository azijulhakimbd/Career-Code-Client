import React, { use } from "react";

const ApplicationList = ({ myApplicationPromise }) => {
  const applications = use(myApplicationPromise);
  console.log(applications);
  
  return <div>
    <h2 className="text-center font-bold text-4xl">Applied jobs :{applications.length}</h2>
  </div>;
};

export default ApplicationList;

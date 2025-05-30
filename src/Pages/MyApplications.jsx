import React, { Suspense } from "react";
import UseAuth from "../Hooks/UseAuth";
import ApplicationList from "../Components/ApplicationList";
import { myApplicationPromise } from "../API/ApplicationApi";


const MyApplications = () => {
  const { user } = UseAuth();
  return (
    <div>
      <Suspense
        fallback={
       
            <span className="loading loading-ring loading-xl"></span>
          
        }
      >
       <ApplicationList myApplicationPromise={myApplicationPromise(user.email)}></ApplicationList>
      </Suspense>
    </div>
  );
};

export default MyApplications;

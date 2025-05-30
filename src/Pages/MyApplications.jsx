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
       <div className="min-h-screen flex justify-center items-center"><span className="loading loading-ring loading-xl"></span></div>
            
          
        }
      >
       <ApplicationList myApplicationPromise={myApplicationPromise(user.email)}></ApplicationList>
      </Suspense>
    </div>
  );
};

export default MyApplications;

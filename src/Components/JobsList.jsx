import React, { use } from 'react';

const JobsList = ({jobsCreatedByPromise}) => {
    const jobs =use(jobsCreatedByPromise)
    console.log(jobs);
    
    return (
        <div>
            <h2 className="text-3xl text-center text-warning">Jobs Created by You:{jobs.length}</h2>
        </div>
    );
};

export default JobsList;
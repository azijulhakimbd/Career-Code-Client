import React from 'react';
import { useParams } from 'react-router';

const ViewApplications = () => {
    const {job_id}= useParams()
    return (
        <div className='min-h-screen'>
            <h2 className='text-4xl text-center text-info py-10'>Applications for: {job_id}</h2>
        </div>
    );
};

export default ViewApplications;
import React from 'react';
import UseAuth from '../Hooks/UseAuth';
import { useParams } from 'react-router';

const JobApply = () => {
    const {user} =UseAuth();
    const params =useParams();
    console.log(user,params);
    
    return (
        <div>
            
        </div>
    );
};

export default JobApply;
import React from 'react';
import {
  FaBriefcase,
  FaCalendarAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaUser,
} from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router'; 

const JobDetails = () => {
  const {
    _id,
    title,
    location,
    jobType,
    description,
    category,
    company,
    company_logo,
    requirements,
    applicationDeadline,
    salaryRange,
    responsibilities,
    hr_name,
    hr_email,
  } = useLoaderData();

  return (
    <div className="max-w-4xl mx-auto p-6 bg-base-100 shadow-md rounded-2xl mt-6 border border-base-300 transition-all duration-300">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 border-b border-base-300 pb-4 mb-6">
        <img
          src={company_logo}
          alt={company}
          className="w-16 h-16 rounded-full border border-base-300"
        />
        <div>
          <h1 className="text-2xl font-bold text-base-content">{title}</h1>
          <p className="text-sm text-base-content/70">
            {company} • {category}
          </p>
        </div>
      </div>

      {/* Job Info */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6 text-sm text-base-content/80">
        <div className="flex items-center gap-2">
          <FaMapMarkerAlt className="text-success" /> {location}
        </div>
        <div className="flex items-center gap-2">
          <FaBriefcase className="text-success" /> {jobType}
        </div>
        <div className="flex items-center gap-2">
          <FaCalendarAlt className="text-success" /> Deadline: {applicationDeadline}
        </div>
        <div className="flex items-center gap-2">
          💰 Salary: ৳{salaryRange.min.toLocaleString()} – ৳{salaryRange.max.toLocaleString()}
        </div>
      </div>

      {/* Description */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2 text-base-content">Job Description</h2>
        <p className="text-sm text-base-content/80">{description}</p>
      </div>

      {/* Requirements */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2 text-base-content">Requirements</h2>
        <ul className="list-disc list-inside text-sm text-base-content/80">
          {requirements.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>

      {/* Responsibilities */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2 text-base-content">Responsibilities</h2>
        <ul className="list-disc list-inside text-sm text-base-content/80">
          {responsibilities.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>

      {/* HR Contact + Apply */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mt-8 gap-4">
        <div className="text-sm text-base-content/70 flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <FaUser className="text-success" /> {hr_name}
          </div>
          <div className="flex items-center gap-2">
            <FaEnvelope className="text-success" /> {hr_email}
          </div>
        </div>
        <Link to={`/jobApply/${_id}`}><button className="btn btn-success text-white">Apply Now</button></Link>
      </div>
    </div>
  );
};

export default JobDetails;

import { IoLocationSharp } from "react-icons/io5";
import { Link } from "react-router";

const JobsCard = ({ job }) => {
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
  } = job;

  return (
    <div className="card mx-auto w-full md:w-96 bg-base-100 shadow-xl border border-base-300 transition-colors duration-300">
      <div className="card-body">
        {/* Header */}
        <div className="flex items-center gap-4 mb-2">
          <div className="avatar">
            <div className="w-14 rounded-full ring ring-success ring-offset-base-100 ring-offset-2">
              <img src={company_logo} alt={company} />
            </div>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-success">{company}</h2>
            <p className="text-sm flex items-center gap-1 text-base-content">
              <IoLocationSharp className="text-success" />
              {location}
            </p>
          </div>
        </div>

        {/* Job Title */}
        <h2 className="card-title text-xl font-bold text-base-content">
          {title}
          <div className="badge badge-success text-white">NEW</div>
        </h2>

        {/* Job Info */}
        <p className="text-sm text-base-content">
          <strong>Category:</strong> {category}
        </p>
        <p className="text-sm text-base-content">
          <strong>Type:</strong> {jobType}
        </p>
        <p className="text-sm text-success font-semibold">
          Salary: ৳{salaryRange.min} - ৳{salaryRange.max} {salaryRange.currency.toUpperCase()}
        </p>

        {/* Description */}
        <p className="text-sm text-base-content line-clamp-3">{description}</p>

        {/* Deadline */}
        <p className="text-sm text-warning font-medium">
          Deadline: {applicationDeadline}
        </p>

        {/* Requirements */}
        <div className="flex flex-wrap gap-2">
          {requirements.map((skill, index) => (
            <div key={index} className="badge badge-outline badge-success">
              {skill}
            </div>
          ))}
        </div>

        {/* Apply Button */}
        <div className="card-actions justify-end pt-4">
          <Link to={`/jobs/${_id}`}>
            <button className="btn btn-success text-white">Apply Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default JobsCard;

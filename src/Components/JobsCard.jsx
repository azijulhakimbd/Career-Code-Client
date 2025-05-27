import { IoLocationSharp } from "react-icons/io5";

const JobsCard = ({ job }) => {
  const {
    title,
    location,
    jobType,
    description,
    category,
    company,
    company_logo,
  } = job;
  return (
    <div className="mx-auto">
      <div className="card bg-base-100 w-96 shadow-sm">
        <div className="flex">
          <figure>
            <img src={company_logo} alt="Company Logo" />
          </figure>
          <div>
            <h1 className="text-4xl">{company}</h1>
            <p className="flex items-center gap-1">
              <IoLocationSharp />
              {location}
            </p>
          </div>
        </div>
        <div className="card-body">
          <h2 className="card-title">
            {title}
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p>
            A card component has a figure, a body part, and inside body there
            are title and actions parts
          </p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">Fashion</div>
            <div className="badge badge-outline">Products</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobsCard;

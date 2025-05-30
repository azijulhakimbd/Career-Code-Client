import React from "react";

const ApplicationsData = ({ application, index }) => {
  const {
    _id,
    company,
    title,
    company_logo,
    applicationDeadline,
    category,
    location,
  } = application;

  return (
    <tr>
      <th>
        <label>{index}</label>
      </th>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle h-12 w-12">
              <img src={company_logo} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
          <div>
            <div className="font-bold">{company}</div>
            <div className="text-sm opacity-50">{location}</div>
          </div>
        </div>
      </td>
      <td>
        {title}
        <br />
        <span className="badge badge-ghost badge-sm">{category}</span>
      </td>
      <td>{applicationDeadline}</td>
      
    </tr>
  );
};

export default ApplicationsData;

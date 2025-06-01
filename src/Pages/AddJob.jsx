import React from "react";
import UseAuth from "../Hooks/UseAuth";
import axios from "axios";
import Swal from "sweetalert2"
const AddJob = () => {
  const { user } = UseAuth();
  const handleAddJob = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    //    process salary range data
    const { min, max, currency, ...newJob } = data;
    newJob.salaryRange = { min, max, currency };

    //    Process requirements
    const requirementsString = newJob.requirements;
    const requirememtsDirty = requirementsString.split(",");
    const requirementsClean = requirememtsDirty.map((req) => req.trim());
    newJob.requirements = requirementsClean;
    //  Process responsibilities
    newJob.responsibilities = newJob.responsibilities
      .split(",")
      .map((res) => res.trim());
    console.log(newJob);
    // Status
    newJob.status = "active";
    // save job to the database
    axios
      .post("https://career-code-server-rouge.vercel.app/jobs", newJob)
      .then((res) => {
        if (res.data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Add job Successfully",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="min-h-screen mx-auto w-11/12">
      <h1 className="text-center text-4xl text-success font-bold p-10">
        Add Your Job
      </h1>
      <form onSubmit={handleAddJob} className="lg:mx-170 py-10">
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
          <legend className="fieldset-legend">Job Basic Info</legend>

          <label className="label">Job Title</label>
          <input
            type="text"
            name="title"
            className="input"
            placeholder="Job title"
          />

          <label className="label">Company</label>
          <input
            type="text"
            name="company"
            className="input"
            placeholder="Company Name"
          />

          <label className="label">Location</label>
          <input
            type="text"
            name="location"
            className="input"
            placeholder="Location"
          />
          <label className="label">Company Logo</label>
          <input
            type="url"
            name="company_logo"
            className="input"
            placeholder="Company Logo URL"
          />
        </fieldset>
        {/* Job type */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
          <legend className="fieldset-legend">Job Type</legend>
          <div className="filter">
            <input
              className="btn filter-reset"
              type="radio"
              name="jobType"
              aria-label="All"
            />
            <input
              className="btn"
              type="radio"
              name="jobType"
              value="on-Site"
              aria-label="On-Site"
            />
            <input
              className="btn"
              type="radio"
              name="jobType"
              value="Remote"
              aria-label="Remote"
            />
            <input
              className="btn"
              type="radio"
              name="jobType"
              value="Hybrid"
              aria-label="Hybrid"
            />
          </div>
        </fieldset>
        {/* Job Category */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
          <legend className="fieldset-legend">Job Category</legend>
          <select
            name="category"
            defaultValue="job category"
            className="select select-success"
          >
            <option disabled={true}>Pick a Category</option>
            <option>Engineering</option>
            <option>Marketing</option>
            <option>Finance</option>
          </select>
        </fieldset>
        {/* Deadline */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
          <legend className="fieldset-legend">Deadline</legend>
          <input type="date" name="applicationDeadline" className="input" />
        </fieldset>
        {/* Salary Range */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
          <legend className="fieldset-legend">Salary Range</legend>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-2">
            <div>
              {" "}
              <label className="label">Minimum Salary</label>
              <input
                type="number"
                name="min"
                className="input"
                placeholder="Minimum Salary"
              />
            </div>
            <div>
              <label className="label">Maximum Salary</label>
              <input
                type="number"
                name="max"
                className="input"
                placeholder="Maximum Salary"
              />
            </div>

            <div>
              {" "}
              <label className="label">Currency</label>
              <select
                name="currency"
                defaultValue="Currency"
                className="select select-success"
              >
                <option disabled={true}>Pick a Currency</option>
                <option>BDT</option>
                <option>USD</option>
                <option>EU</option>
              </select>
            </div>
          </div>
        </fieldset>
        {/* Job Description */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
          <legend className="fieldset-legend">Job Description</legend>
          <textarea
            placeholder="Job Description"
            name="description"
            className="textarea textarea-success"
          ></textarea>
        </fieldset>
        {/* Job Requirements */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
          <legend className="fieldset-legend">Job Requirements </legend>
          <textarea
            placeholder="Job Requirements (separate by comma)"
            name="requirements"
            className="textarea textarea-success"
          ></textarea>
        </fieldset>
        {/* Job Responsibilities */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
          <legend className="fieldset-legend">Job Responsibilities </legend>
          <textarea
            placeholder="Job Responsibilities (separate by comma)"
            name="responsibilities"
            className="textarea textarea-success"
          ></textarea>
        </fieldset>
        {/* HR Info */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
          <legend className="fieldset-legend">HR Info</legend>

          <label className="label">HR Name</label>
          <input
            type="text"
            name="hr_name"
            className="input"
            placeholder="HR Name"
          />

          <label className="label">HR Email</label>
          <input
            type="text"
            name="hr_email"
            className="input"
            defaultValue={user.email}
            placeholder="HR Email"
          />

          <input type="submit" className="btn btn-success" value="Add job" />
        </fieldset>
      </form>
    </div>
  );
};

export default AddJob;

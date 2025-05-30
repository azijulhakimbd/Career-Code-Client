import React from "react";

const AddJob = () => {
  return (
    <div className="min-h-screen mx-auto w-11/12">
      <h1 className="text-center text-4xl text-success font-bold p-10">
        Add Your Job
      </h1>
      <form className="lg:mx-180 py-10">
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
            type="text"
            name="company_logo"
            className="input"
            placeholder="Company Logo URL"
          />
        </fieldset>
        {/*  */}
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
              aria-label="Sveltekit"
            />
            <input
              className="btn"
              type="radio"
              name="jobType"
              aria-label="Nuxt"
            />
            <input
              className="btn"
              type="radio"
              name="jobType"
              aria-label="Next.js"
            />
          </div>
        </fieldset>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
          <legend className="fieldset-legend">Job Basic Info</legend>
        </fieldset>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
          <legend className="fieldset-legend">Job Basic Info</legend>
        </fieldset>
      </form>
    </div>
  );
};

export default AddJob;

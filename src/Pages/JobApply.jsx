import React from "react";
import UseAuth from "../Hooks/UseAuth";
import { useParams } from "react-router";
import axios from "axios"

const JobApply = () => {
  const { user } = UseAuth();
  const { id: jobId } = useParams();

  const handleApply = (e) => {
    e.preventDefault();
    const form = e.target;
    const linkedIn = form.linkedin.value;
    const github = form.github.value;
    const resume = form.resume.value;
    const application = {
      jobId,
      applicant: user.email,
      linkedIn,
      resume,
      github,
    };

    axios.post("http://localhost:3000/applications", application)
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="mx-auto">
      <h1 className="text-success text-4xl text-center p-5">
        Apply For this Job: <></>
      </h1>
      <form onSubmit={handleApply}>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
          <label className="label">Linkedin Profile Link</label>
          <input
            type="url"
            className="input"
            name="linkedin"
            placeholder="your Linkedin Profile Link"
          />

          <label className="label">Github Profile Link</label>
          <input
            type="url"
            name="github"
            className="input"
            placeholder="your Github Profile Link"
          />

          <label className="label">Resume Link</label>
          <input
            type="url"
            className="input"
            name="resume"
            placeholder="Resume Link"
          />
          <input type="submit" className="btn w-full" value="Apply" />
        </fieldset>
      </form>
    </div>
  );
};

export default JobApply;

import React from "react";
import UseAuth from "../Hooks/UseAuth";
import { useParams } from "react-router";
import axios from "axios";
import Swal from "sweetalert2";

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

    axios
      .post(
        "https://career-code-server-rouge.vercel.app/applications",
        application
      )
      .then((res) => {
        console.log(res.data);

        if (res.data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your application has been Submitted",
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
    <div className="mx-auto py-25 min-h-screen">
      <h1 className="text-success text-4xl text-center">
        Apply For this Job <></>
      </h1>
      <form onSubmit={handleApply} className="mx-auto">
        <fieldset className="fieldset mx-auto lg:px-200 lg:py-50 bg-base-100 p-4">
          <label className="label text-center">Linkedin Profile Link</label>
          <input
            type="url"
            className="input"
            name="linkedin"
            required
            placeholder="your Linkedin Profile Link"
          />

          <label className="label">Github Profile Link</label>
          <input
            type="url"
            name="github"
            className="input"
            required
            placeholder="your Github Profile Link"
          />

          <label className="label">Resume Link</label>
          <input
            type="url"
            className="input"
            name="resume"
            required
            placeholder="Resume Link"
          />
          <input
            type="submit"
            className="btn w-full bg-success"
            value="Apply"
          />
        </fieldset>
      </form>
    </div>
  );
};

export default JobApply;

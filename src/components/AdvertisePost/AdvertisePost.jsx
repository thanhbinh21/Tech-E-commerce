import React from "react";
import "./AdvertisePost.css";
import { useNavigate } from "react-router-dom";
const AdvertisePost = ({ jobs }) => {
  const navigate = useNavigate();

  const handleClick = (e, job) => {
    e.preventDefault();
    navigate("/detailadvertise", { state: { job } });
  };
  return (
    <div className="job-grid">
      {jobs.map((job) => (
        <article className="khung-gird" key={job.id}>
          <img src={job.image} alt={job.name} className="anhcongty" />
          <div>
            <h3 className="job-title">
              <a href="#" onClick={(e) => handleClick(e, job)}>
                {job.title}
              </a>
            </h3>
            <h3 className="name-cty">{job.name}</h3>
            <div className="job-footer">
              {job.salary && (
                <p className="job-details">
                  {" "}
                  {job.salary} | {job.location}
                </p>
              )}
              <p className="job-date"> {job.date}</p>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
};

export default AdvertisePost;

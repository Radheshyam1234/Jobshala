import { useStateProvider } from "../Context/StateContext/StateProvider";
import { ApplyToJobBtn } from "./ApplyToJobBtn";
import { SaveJobBtn } from "./SaveJobBtn";

import "./Styles.css";
export const JobCard = ({ job }) => {
  const { state, dispatch } = useStateProvider();
  return (
    <>
      <article className="job-card">
        <div className="company-logo-img">
          <img
            src="https://images.template.net/wp-content/uploads/2019/10/startup-hiring-1-min.jpg"
            alt=""
          />
        </div>
        <div className="job-title">{job.jobTitle} Developer</div>
        <div className="company-name">{job.company}</div>
        <div className="skills-container">
          {job.skills.map((skill) => (
            <div className="skill">{skill}</div>
          ))}
        </div>
        <div className="location"> Location : {job.location}</div>
        <div className="btn-container">
          <ApplyToJobBtn job={job} />
          <SaveJobBtn job={job} />
        </div>
      </article>
    </>
  );
};

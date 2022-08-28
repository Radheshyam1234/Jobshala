import { JobCard } from "../Components/JobCard";
import { useStateProvider } from "../Context/StateContext/StateProvider";
import "./Styles.css";

export const AppliedJobs = () => {
  const {
    state: { appliedJobs }
  } = useStateProvider();
  return (
    <div className="applied-jobs-container">
      {appliedJobs.length > 0 ? (
        appliedJobs.map((job) => {
          return <JobCard job={job} />;
        })
      ) : (
        <h3>No applied Jobs </h3>
      )}
    </div>
  );
};

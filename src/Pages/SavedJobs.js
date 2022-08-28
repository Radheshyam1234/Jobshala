import { JobCard } from "../Components/JobCard";
import { useStateProvider } from "../Context/StateContext/StateProvider";
import "./Styles.css";

export const SavedJobs = () => {
  const {
    state: { savedJobs }
  } = useStateProvider();
  return (
    <div className="saved-jobs-container">
      {savedJobs.length > 0 ? (
        savedJobs.map((job) => {
          return <JobCard job={job} />;
        })
      ) : (
        <h3>No saved Jobs </h3>
      )}
    </div>
  );
};

import { JobCard } from "../Components/JobCard";
import { Filter } from "../Components/Filter/Filter";
import { Jobs } from "../JobsData";
import { FilteredData } from "../Components/Filter/FilteredData";

import "./Styles.css";

export const CareersPage = () => {
  return (
    <div className="career-page">
      <div className="filter-section">
        <Filter />
      </div>
      <div className="job-listing-section">
        {FilteredData(Jobs).length > 0 ? (
          FilteredData(Jobs).map((job) => {
            return <JobCard job={job} key={job.id} />;
          })
        ) : (
          <h4>No matching results</h4>
        )}
      </div>
    </div>
  );
};

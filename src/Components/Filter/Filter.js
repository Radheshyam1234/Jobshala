import { JobTitles, Locations, Companies, Salaries } from "../../Db";
import { useFilterProvider } from "../../Context/FilterContext/FilterProvider";

import "./Filter.css";

export const Filter = () => {
  const {
    filterState: { applySearch, byJobTitle, byCompany, byLocation },
    filterDispatch
  } = useFilterProvider();
  return (
    <>
      <div className="filters">
        <div className="filter-category">
          <h3> Job-Title</h3>
          {JobTitles.map((title) => {
            return (
              <>
                <label>
                  <input
                    type="checkbox"
                    key={title}
                    onChange={() => {
                      filterDispatch({
                        type: "FILTER_BY_JOB_TITLE",
                        payload: title
                      });
                    }}
                    checked={byJobTitle.includes(title)}
                  />
                  <span className="ml-20">{title}</span>
                </label>
                <br />
              </>
            );
          })}
        </div>

        <div className="filter-category">
          <h3> Company</h3>
          {Companies.map((company) => {
            return (
              <>
                <label>
                  <input
                    type="checkbox"
                    key={company}
                    onChange={() => {
                      filterDispatch({
                        type: "FILTER_BY_COMPANY",
                        payload: company
                      });
                    }}
                    checked={byCompany.includes(company)}
                  />
                  <span className="ml-20">{company}</span>
                </label>
                <br />
              </>
            );
          })}
        </div>

        <div className="filter-category">
          <h3> Location</h3>
          {Locations.map((location) => {
            return (
              <>
                <label>
                  <input
                    type="checkbox"
                    key={location}
                    onChange={() => {
                      filterDispatch({
                        type: "FILTER_BY_LOCATION",
                        payload: location
                      });
                    }}
                    checked={byLocation.includes(location)}
                  />
                  <span className="ml-20">{location}</span>
                </label>
                <br />
              </>
            );
          })}
        </div>

        <div className="filter-category">
          <button
            className="reset-button"
            onClick={() => {
              filterDispatch({ type: "CLEAR_FILTERS" });
            }}
          >
            Clear Filters{" "}
          </button>
        </div>
      </div>
    </>
  );
};

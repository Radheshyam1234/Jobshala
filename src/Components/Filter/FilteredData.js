import { useFilterProvider } from "../../Context/FilterContext/FilterProvider";

export const FilteredData = (jobsData) => {
  const {
    filterState: { applySearch, byJobTitle, byCompany, byLocation }
  } = useFilterProvider();
  let ModifiedData = [...jobsData];

  if (applySearch !== "") {
    let searchTerm = applySearch.toLowerCase();
    ModifiedData = ModifiedData.filter((job) => {
      return (
        job.jobTitle.toLowerCase().indexOf(searchTerm) !== -1 ||
        job.company.toLowerCase().indexOf(searchTerm) !== -1
      );
    });
  }

  if (byJobTitle.length !== 0) {
    ModifiedData = ModifiedData.filter((job) => {
      return byJobTitle.includes(job.jobTitle);
    });
  }

  if (byCompany.length !== 0) {
    ModifiedData = ModifiedData.filter((job) => {
      return byCompany.includes(job.company);
    });
  }

  if (byLocation.length !== 0) {
    ModifiedData = ModifiedData.filter((job) => {
      return byLocation.includes(job.location);
    });
  }

  return ModifiedData;
};

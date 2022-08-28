import { useState, useEffect, useCallback } from "react";
import { useFilterProvider } from "../../Context/FilterContext/FilterProvider";

import "./Styles.css";
export const SearchBar = () => {
  const [search, setSearch] = useState("");
  const { filterDispatch } = useFilterProvider();

  useEffect(() => {
    filterDispatch({ type: "FILTER_BY_SEARCH", payload: search });
  }, [search]);

  const searchHandler = (e) => {
    setSearch(e.target.value);
  };

  function debounceFun(searchHandler, delay) {
    let timerId;
    return function () {
      let self = this;
      let args = arguments;
      clearTimeout(timerId);
      timerId = setTimeout(() => {
        searchHandler.apply(self, args);
      }, delay);
    };
  }

  const optSearchHandler = useCallback(debounceFun(searchHandler, 500), []);
  return (
    <>
      <div className="search">
        <input
          type="search"
          placeholder="Search for profile, company ..."
          onChange={optSearchHandler}
        />
      </div>
    </>
  );
};

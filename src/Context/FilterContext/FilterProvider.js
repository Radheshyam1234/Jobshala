import { createContext, useContext, useReducer } from "react";
import { FilterReducer } from "./FilterReducer";

const filterContext = createContext();

export const FilterProvider = ({ children }) => {
  const initialState = {
    applySearch: "",
    byJobTitle: [],
    byCompany: [],
    byLocation: []
    //  bySalary:[],
  };
  const [filterState, filterDispatch] = useReducer(FilterReducer, initialState);

  return (
    <filterContext.Provider value={{ filterState, filterDispatch }}>
      {children}
    </filterContext.Provider>
  );
};

export const useFilterProvider = () => useContext(filterContext);

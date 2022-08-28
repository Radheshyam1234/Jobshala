import { createContext, useContext, useReducer } from "react";
import { stateReducer } from "./StateReducer";

const stateContext = createContext();
export const StateProvider = ({ children }) => {
  const initialState = {
    savedJobs: [],
    appliedJobs: []
  };
  const [state, dispatch] = useReducer(stateReducer, initialState);

  return (
    <stateContext.Provider value={{ state, dispatch }}>
      {children}
    </stateContext.Provider>
  );
};

export const useStateProvider = () => useContext(stateContext);

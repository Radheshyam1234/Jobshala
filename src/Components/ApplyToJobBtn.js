import { useStateProvider } from "../Context/StateContext/StateProvider";
import { isPresentInApplied } from "../utilities";

export const ApplyToJobBtn = ({ job }) => {
  const { state, dispatch } = useStateProvider();
  return (
    <>
      {isPresentInApplied(state.appliedJobs, job) ? (
        <button className="applied">Applied</button>
      ) : (
        <button
          className="apply"
          onClick={() => {
            dispatch({ type: "ADD_TO_APPLIED", payload: job });
          }}
        >
          Apply
        </button>
      )}
    </>
  );
};

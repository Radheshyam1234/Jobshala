import { useStateProvider } from "../Context/StateContext/StateProvider";
import { isPresentInSaved } from "../utilities";

export const SaveJobBtn = ({ job }) => {
  const { state, dispatch } = useStateProvider();
  return (
    <>
      {isPresentInSaved(state.savedJobs, job) ? (
        <button
          className="save"
          onClick={() => {
            dispatch({ type: "REMOVE_FROM_SAVED", payload: job });
          }}
        >
          Saved
        </button>
      ) : (
        <button
          className="save"
          onClick={() => {
            dispatch({ type: "ADD_TO_SAVED", payload: job });
          }}
        >
          Save
        </button>
      )}
    </>
  );
};

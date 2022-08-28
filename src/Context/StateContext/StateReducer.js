export const stateReducer = (state, { type, payload }) => {
  switch (type) {
    case "ADD_TO_SAVED": {
      return {
        ...state,
        savedJobs: [...state.savedJobs, payload]
      };
    }
    case "REMOVE_FROM_SAVED": {
      return {
        ...state,
        savedJobs: state.savedJobs.filter(
          (savedJob) => savedJob.jobId !== payload.jobId
        )
      };
    }

    case "ADD_TO_APPLIED": {
      return {
        ...state,
        appliedJobs: [...state.appliedJobs, payload]
      };
    }
    case "REMOVE_FROM_APPLIED": {
      return {
        ...state,
        appliedJobs: state.appliedJobs.filter(
          (appliedJob) => appliedJob.jobId !== payload.jobId
        )
      };
    }

    default:
      return state;
  }
};

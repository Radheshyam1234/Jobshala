export const FilterReducer = (state, { type, payload }) => {
  switch (type) {
    case "FILTER_BY_SEARCH": {
      return {
        ...state,
        applySearch: payload
      };
    }

    case "FILTER_BY_JOB_TITLE": {
      return state.byJobTitle.includes(payload)
        ? {
            ...state,
            byJobTitle: state.byJobTitle.filter((item) => item !== payload)
          }
        : {
            ...state,
            byJobTitle: state.byJobTitle.concat(payload)
          };
    }
    case "FILTER_BY_COMPANY": {
      return state.byCompany.includes(payload)
        ? {
            ...state,
            byCompany: state.byCompany.filter((item) => item !== payload)
          }
        : {
            ...state,
            byCompany: state.byCompany.concat(payload)
          };
    }

    case "FILTER_BY_LOCATION": {
      return state.byLocation.includes(payload)
        ? {
            ...state,
            byLocation: state.byLocation.filter((item) => item !== payload)
          }
        : {
            ...state,
            byLocation: state.byLocation.concat(payload)
          };
    }

    case "CLEAR_FILTERS": {
      return {
        applySearch: "",
        byJobTitle: [],
        byCompany: [],
        byLocation: []
      };
    }

    default:
      return state;
  }
};

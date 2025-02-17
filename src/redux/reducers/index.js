const initialState = {
  jobs: [],
  query: "",
};
const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADDJOBS":
      return { ...state, jobs: [...state.jobs, action.payload] };
    default:
      return state;
  }
};
export default mainReducer;

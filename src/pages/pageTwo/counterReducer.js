import counterTypes from "./redux-resources";

const initialState = {
  count: 0,
};

function counterReducer(state = initialState, action) {
  switch (action.type) {
    case counterTypes.ADD_ONE:
      return { count: state.count + 1 };
    case counterTypes.MINUS_ONE:
      return { count: state.count - 1 };
    default:
      return state;
  }
}
export default counterReducer;

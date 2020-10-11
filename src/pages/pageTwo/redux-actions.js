import counterTypes from "./redux-resources";
export const increment = () => ({
  type: counterTypes.ADD_ONE,
});
export const decrement = () => ({
  type: counterTypes.MINUS_ONE,
});

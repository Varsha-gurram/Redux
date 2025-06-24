const initialCounter = 0;
const ReducerM = (state = initialCounter, action) => {
  switch (action.type) {
    case "MULTIPLY":
      return state * action.payload;
    default:
      return state;
  }
};
export default ReducerM;

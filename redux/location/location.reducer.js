const { LocationActionsType } = require("./location.types");

const INITIAL_STATE = {};

const locationReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LocationActionsType.GET_LOCATION:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};
export default locationReducer;

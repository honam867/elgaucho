const { LocationActionsType } = require("./location.types");
import axios from "axios";
export const FetchLocation = () => {
  return function (dispatch) {
    return axios
      .get(
        "https://geolocation-db.com/json/ef6c41a0-9d3c-11eb-8f3b-e1f5536499e7"
      )
      .then(({ data }) => {
        dispatch(GetLocation(data));
      });
  };
};

export const GetLocation = (payload) => {
  return {
    type: LocationActionsType.GET_LOCATION,
    payload,
  };
};

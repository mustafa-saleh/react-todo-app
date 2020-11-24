import { FETCH_CATEGORIES } from "./types";
import { BASE_URL } from "../../config/config";
import { getData } from "../../utils/fetch";

export const FetchCategories = () => (dispatch) => {
  getData(BASE_URL + "categories").then(
    (result) => {
      // console.log("SUCCESS:", result);
      return dispatch({
        type: FETCH_CATEGORIES,
        payload: result,
      });
    },
    (error) => {
      console.log("ERROR:", error);
    }
  );
};

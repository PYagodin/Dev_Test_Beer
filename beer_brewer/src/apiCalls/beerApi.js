import axios from "axios";
import { updateBeers } from "../store/beerReducer";

const BASE_URL = "https://api.punkapi.com/v2/beers?";
const PER_PAGE = 8;

async function callApi(dispatch, page, foodPairing) {
  let API_URL = BASE_URL;

  if (page !== undefined) API_URL += "page=" + page;

  if (PER_PAGE !== undefined) API_URL += "&per_page=" + PER_PAGE;

  if (foodPairing !== undefined && foodPairing.length !== 0)
    API_URL += "&food=" + foodPairing;

  let result = await axios
    .get(API_URL)
    .then((res) => {
      if (dispatch !== undefined) dispatch(updateBeers(res.data));
      return res.data;
    })
    .catch((error) => {
      console.log(error);
    });
  return result;
}

async function nextPageHasResults(dispatch, page, foodPairing) {
  let API_URL = BASE_URL;
  if (page !== undefined) API_URL += "page=" + (page + 1);
  if (PER_PAGE !== undefined) API_URL += "&per_page=" + PER_PAGE;
  if (foodPairing !== undefined && foodPairing.length !== 0)
    API_URL += "&food=" + foodPairing;

  let result = await axios
    .get(API_URL)
    .then((res) => {
      return res.data.length > 0;
    })
    .catch((error) => {
      console.log(error);
    });
  return result;
}

export { callApi, nextPageHasResults };

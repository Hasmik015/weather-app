import {
  GET_WEATHER,
  SET_CITY,
} from "./weather.types";
import axios from "axios";

export const getWeather = () => (dispatch, getState) => {
  const { city } = getState().appData;
  return axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=e403a5a5f562cc6e20d38fb329ee4738`)
    .then((response) => {
      dispatch({
        type: GET_WEATHER,
        payload: response.data,
      });
    })
    .catch((error) => {
      if (error) {
        dispatch({
          type: GET_WEATHER,
          payload: {},
        });
      }
    });
};

export const setCity = (city) => (dispatch) => {
  dispatch({
    type: SET_CITY,
    payload: city,
  });
};
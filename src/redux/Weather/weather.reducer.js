import {
  GET_WEATHER,
  SET_CITY,
} from './weather.types';

const initialState = {
  weather: {},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_WEATHER:
      return {
        ...state,
        weather: action.payload,
      };
    case SET_CITY:
      return {
        ...state,
        city: action.payload,
      };
    default: return state;
  }
}

export default reducer;
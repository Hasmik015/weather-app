import { combineReducers } from 'redux';
import reducer from './Weather/weather.reducer';

const rootReducer = combineReducers({
  appData: reducer,
});

export default rootReducer;
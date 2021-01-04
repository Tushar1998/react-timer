import { combineReducers } from "redux";
import timerReducer from "./timer.reducer";

const rootReducer = combineReducers({
  timerReducer: timerReducer,
});

export default rootReducer;

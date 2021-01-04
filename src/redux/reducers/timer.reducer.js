import { timerType } from "../constants/timerType.action";

const initialState = {
  sec: 0,
  min: 0,
};

const timerReducer = (state = initialState, action) => {
  switch (action.type) {
    case timerType.INCREMENT:
      return {
        ...state,
        sec: state.count + 1,
      };

    default:
      return {
        ...state,
      };
  }
};

export default timerReducer;

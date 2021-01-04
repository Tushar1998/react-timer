import { timerType } from "../constants/timerType.action";

const timerActionGenerator = (actiontype) => {
  switch (actiontype) {
    case timerType.INCREMENT:
      return {
        type: timerType.INCREMENT,
      };

    default:
      return {
        type: "Invalid Action",
      };
  }
};

export default timerActionGenerator;

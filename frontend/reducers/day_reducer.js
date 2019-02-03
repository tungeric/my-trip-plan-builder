import { RECEIVE_DAYS, RECEIVE_DAY } from "../actions/day_actions";

const daysReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_DAYS:
      return action.days;
    case RECEIVE_DAY:
      const newState = { [action.day.id]: action.day };
      return newState;
    default:
      return state;
  }
};

export default daysReducer;
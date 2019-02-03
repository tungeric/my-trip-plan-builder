import { RECEIVE_TRIP_PLANS, RECEIVE_TRIP_PLAN } from "../actions/trip_plan_actions";

const tripPlansReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_TRIP_PLANS:
      return action.tripPlans;
    case RECEIVE_TRIP_PLAN:
      const newState = { [action.tripPlan.id]: action.tripPlan };
      return newState;
    default:
      return state;
  }
};

export default tripPlansReducer;
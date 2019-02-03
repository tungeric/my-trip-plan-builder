import { combineReducers } from "redux";
import tripPlans from "./trip_plan_reducer";
import days from "./day_reducer";

export default combineReducers({
  tripPlans, days
});

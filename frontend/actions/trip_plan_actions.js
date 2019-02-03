import * as APIUtil from "../util/trip_plan_api_util";

export const RECEIVE_TRIP_PLANS = "RECEIVE_TRIP_PLANS";
export const RECEIVE_TRIP_PLAN = "RECEIVE_TRIP_PLAN";
export const RECEIVE_TRIP_PLAN_ERRORS = "RECEIVE_TRIP_PLAN_ERRORS";

export const receiveTripPlans = tripPlans => ({
  type: RECEIVE_TRIP_PLANS,
  tripPlans
});

export const receiveTripPlan = tripPlan => ({
  type: RECEIVE_TRIP_PLAN,
  tripPlan
});

export const receiveErrors = errors => ({
  type: RECEIVE_TRIP_PLAN_ERRORS,
  errors
});

export const getTripPlans = () => dispatch => 
  APIUtil.fetchTripPlans().then(
    response => dispatch(receiveTripPlans(response)),
    err => dispatch(receiveErrors(err.responseJSON))
  );

export const getTripPlan = id => dispatch => {
  return APIUtil.fetchTripPlan(id).then(
    response => dispatch(receiveTripPlan(response)),
    err => dispatch(receiveErrors(err.responseJSON))
  );
};

export const updateTripPlan = tripPlan => dispatch => {
  return APIUtil.updateTripPlan(tripPlan).then(
    response => dispatch(receiveTripPlan(response)),
    err => dispatch(receiveErrors(err.responseJSON))
  );
};

export const createTripPlan = tripPlan => dispatch => {
  return APIUtil.createTripPlan(tripPlan).then(
    response => dispatch(receiveTripPlan(response)),
    err => dispatch(receiveErrors(err.responseJSON))
  );
};
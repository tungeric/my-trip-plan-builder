import * as APIUtil from "../util/day_api_util";

export const RECEIVE_DAYS = "RECEIVE_DAYS";
export const RECEIVE_DAY = "RECEIVE_DAY";
export const RECEIVE_DAY_ERRORS = "RECEIVE_DAY_ERRORS";

export const receiveDays = days => ({
  type: RECEIVE_DAYS,
  days
});

export const receiveDay = day => ({
  type: RECEIVE_DAY,
  day
});

export const receiveErrors = errors => ({
  type: RECEIVE_DAY_ERRORS,
  errors
});

export const getDays = () => dispatch =>
  APIUtil.fetchDays().then(
    response => dispatch(receiveDays(response)),
    err => dispatch(receiveErrors(err.responseJSON))
  );

export const getDay = id => dispatch =>
  APIUtil.fetchDay(id).then(
    response => dispatch(receiveDays(response)),
    err => dispatch(receiveErrors(err.responseJSON))
  );

export const createDay = day => dispatch => {
  return APIUtil.createDay(day).then(
    response => dispatch(receiveDay(response)),
    err => dispatch(receiveErrors(err.responseJSON))
  );
};
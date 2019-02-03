export const fetchTripPlans = () =>
  $.ajax({
    method: "GET",
    url: `api/trip_plans/`,
    err: () => console.log("Error fetching trip plans")
  });

export const fetchTripPlan = id => {
  return $.ajax({
    method: "GET",
    url: `api/trip_plans/${id}`,
    err: () => console.log("Error fetching trip plan")
  });
};

export const updateTripPlan = (tripPlan) => {
  return $.ajax({
    method: 'PATCH',
    url: `api/trip_plans/${tripPlan.trip_plan.id}`,
    data: tripPlan,
  });
};

export const createTripPlan = (tripPlan) => {
  return $.ajax({
    method: 'POST',
    url: `api/trip_plans/`,
    data: tripPlan,
  });
};
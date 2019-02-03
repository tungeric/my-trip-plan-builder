export const fetchDay = id =>
  $.ajax({
    method: "GET",
    url: `api/days/${id}`,
    err: () => console.log("Error fetching day")
  });

export const fetchDays = () =>
  $.ajax({
    method: "GET",
    url: `api/days`,
    err: () => console.log("Error fetching days")
  });

export const createDay = (day) => {
  return $.ajax({
    method: 'POST',
    url: `api/days/`,
    data: day,
  });
};
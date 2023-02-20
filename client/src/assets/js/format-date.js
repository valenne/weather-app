const months = {
  0: "January",
  1: "February",
  2: "March",
  3: "April",
  4: "May",
  5: "June",
  6: "July",
  7: "August",
  8: "September",
  9: "October",
  10: "November",
  11: "December",
};

const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export const convertTimestamptoTime = (timeUnix) => {
  const dateObj = new Date(timeUnix * 1000);

  // get Month
  const monthIndex = dateObj.getMonth();
  const monthName = months[monthIndex];
  const monthShortName = monthName.slice(0, 3);

  // get day
  const dayIndex = dateObj.getDay();
  const dayName = days[dayIndex];
  const dayNumber = dateObj.getDate();
  // get hour
  const hourIndex = dateObj.toLocaleString().indexOf(",") + 1;
  const hour = dateObj.toLocaleString().slice(hourIndex).trim();

  return {
    complete_time: `${monthShortName} ${dayNumber}, ${hour}`,
    minimal_time: hour,
  };
};

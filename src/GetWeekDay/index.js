function getWeekday(dateString) {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const date = new Date(dateString);
  return days[date.getDay()];
}

// Example
console.log(getWeekday("2025-08-16"));
console.log(getWeekday("2024-12-25"));

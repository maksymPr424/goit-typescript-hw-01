enum DayOfWeek {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

const isWeekend = (day: DayOfWeek) => {
  if (day >= 5) {
    return true;
  }
  return false;
};

console.log(isWeekend(DayOfWeek.Saturday));

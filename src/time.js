import moment from "moment";

// console.clear();
// const oldtime = 1663479565466;
// const offset = { days: 0, months: 0, weeks: 3 };
// const newTime = moment(oldtime).subtract(offset);
// console.log(`Old Time:\n${oldtime}`);
// console.log(`New Time:\n${newTime.valueOf()}`);
// console.log(`Difference:\n${newTime.from(oldtime)}`);

export function offsetTime(oldTime, offset) {
  const newTime = moment(oldTime).subtract(offset);
  return newTime.valueOf();
}

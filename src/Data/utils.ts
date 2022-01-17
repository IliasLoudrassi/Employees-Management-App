import { Timesheet } from "../Types/EmployeeType";

const listOfNames = [
  "Harry",
  "Ross",
  "Bruce",
  "Cook",
  "Carolyn",
  "Morgan",
  "Albert",
  "Walker",
  "Randy",
  "Reed",
  "Larry",
  "Barnes",
  "Lois",
  "Wilson",
  "Jesse",
  "Campbell",
  "Ernest",
  "Rogers",
  "Theresa",
  "Patterson",
  "Henry",
  "Simmons",
  "Michelle",
  "Perry",
  "Frank",
  "Butler",
  "Shirley",
];

const listOfLastnames = [
  "Brooks",
  "Rachel",
  "Edwards",
  "Christopher",
  "Perez",
  "Thomas",
  "Baker",
  "Sara",
  "Moore",
  "Chris",
  "Bailey",
  "Roger",
  "Johnson",
  "Marilyn",
  "Thompson",
  "Anthony",
  "Evans",
  "Julie",
  "Hall",
  "Paula",
  "Phillips",
  "Annie",
  "Hernandez",
  "Dorothy",
  "Murphy",
  "Alice",
  "Howard",
];

const monthsNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const getFakeName = (): string => {
  return `${listOfNames[Math.floor(Math.random() * listOfNames.length)]}`;
};

export const getFakeLastname = (): string => {
  return `${
    listOfLastnames[Math.floor(Math.random() * listOfLastnames.length)]
  }`;
};

export const getDateFormatFromTimesheet = (timesheet: Timesheet): string => {
  return `${timesheet.listOfDays[0].date.getUTCDate()} ${
    monthsNames[timesheet.listOfDays[0].date.getMonth()]
  } ${timesheet.listOfDays[0].date.getFullYear()} - 
    ${timesheet.listOfDays[6].date.getUTCDate()} ${
    monthsNames[timesheet.listOfDays[6].date.getMonth()]
  } ${timesheet.listOfDays[0].date.getFullYear()}`;
};

import { v4 as uuidv4 } from "uuid";
import {
  DayOfWeek,
  Employee,
  HourlyRate,
  Timesheet,
} from "../Types/EmployeeType";
import { getFakeLastname, getFakeName } from "./utils";

const generateHourlyRate = () => {
  return Math.floor(Math.random() * (10 - 6 + 1)) + 6;
};

const generateWorkedHours = () => {
  return Math.floor(Math.random() * (14 - 0 + 1));
};

const getFirstDayOfWeek = (date: Date) => {
  const day = date.getDay(),
    diff = date.getDate() - day + (day === 0 ? -6 : 1);
  return new Date(date.setDate(diff));
};

const getIsWeekend = (date: Date) => {
  if (date.getDay() === 6 || date.getDay() === 0) {
    return true;
  }
  return false;
};

export const calculateDailySalary = (
  hourlyRate: HourlyRate,
  totalWorkedHours: number,
  date: Date
): number => {
  let dailySalary = 0;
  if (getIsWeekend(date)) {
    dailySalary = hourlyRate.extra * totalWorkedHours;
  } else {
    if (totalWorkedHours <= 8 && totalWorkedHours > 0) {
      if (totalWorkedHours === 8) {
        dailySalary = hourlyRate.standard * 8;
      }
      if (totalWorkedHours < 8) {
        dailySalary = hourlyRate.standard * (8 - (8 - totalWorkedHours));
      }
    }

    if (totalWorkedHours > 8) {
      dailySalary =
        hourlyRate.standard * 8 + hourlyRate.extra * (totalWorkedHours - 8);
    }
  }
  return dailySalary;
};

const generateTimesheets = (
  numberOfTimeSheets: number,
  hourlyRate: HourlyRate
): Timesheet[] => {
  let timesheets: Timesheet[] = [];
  let firstDayOfWeek: Date = getFirstDayOfWeek(new Date());
  for (let i = 0; i < numberOfTimeSheets; i++) {
    let daysOfWeek: DayOfWeek[] = [];
    for (let j = 0; j < 7; j++) {
      const dateTemp = new Date(firstDayOfWeek);
      const totalWorkedHours = generateWorkedHours();
      const dayOfWeek: DayOfWeek = {
        dayId: uuidv4(),
        dayName: dateTemp.toLocaleString("en-us", { weekday: "long" }),
        totalWorkedHours: totalWorkedHours,
        extraHours: totalWorkedHours > 8 ? totalWorkedHours - 8 : 0,
        totalSalary: calculateDailySalary(
          hourlyRate,
          totalWorkedHours,
          dateTemp
        ),
        date: dateTemp,
      };
      daysOfWeek = [...daysOfWeek, dayOfWeek];
      firstDayOfWeek.setDate(firstDayOfWeek.getDate() + 1);
    }
    const timesheet: Timesheet = {
      listOfDays: daysOfWeek,
      timesheetId: uuidv4(),
    };
    timesheets = [...timesheets, timesheet];
    firstDayOfWeek.setDate(firstDayOfWeek.getDate() - 14);
  }
  return timesheets;
};

export const generateEmployee = (numberOfWeeks: number): Employee => {
  const generatedHourlyRate = generateHourlyRate();
  const hourlyRate: HourlyRate = {
    standard: generatedHourlyRate,
    extra: generatedHourlyRate * 2,
  };
  const employee: Employee = {
    employeeId: uuidv4(),
    employeeName: getFakeName(),
    employeeLastName: getFakeLastname(),
    hourlyRate: hourlyRate,
    timesheets: generateTimesheets(numberOfWeeks, hourlyRate),
  };

  return employee;
};

export interface Employee {
  employeeId: string;
  employeeName: string;
  employeeLastName: string;
  hourlyRate: HourlyRate;
  timesheets?: Timesheet[];
}

export interface HourlyRate {
  standard: number;
  extra: number;
}

export interface DayOfWeek {
  dayId: string;
  dayName: string;
  totalWorkedHours: number;
  totalSalary: number;
  extraHours: number;
  date: Date;
}

export interface Timesheet {
  timesheetId: string;
  listOfDays: DayOfWeek[];
}

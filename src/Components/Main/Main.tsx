import React from "react";
import { Employee, Timesheet } from "../../Types/EmployeeType";
import Filter from "../Filter/Filter";

interface Props {
  handleNameInputClick: (id: string) => void;
  handleDateInputClick: (id: string) => void;
  listOfEmployees: Employee[];
  selectedEmployee: Employee;
  selectedWeek?: Timesheet;
}

export default function Main({
  handleNameInputClick,
  selectedEmployee,
  listOfEmployees,
  selectedWeek,
  handleDateInputClick,
}: Props) {
  return (
    <div>
      <Filter
        listOfEmployees={listOfEmployees}
        selectedEmployee={selectedEmployee}
        handleNameInputClick={handleNameInputClick}
        handleDateInputClick={handleDateInputClick}
        selectedWeek={selectedWeek}
      />
    </div>
  );
}

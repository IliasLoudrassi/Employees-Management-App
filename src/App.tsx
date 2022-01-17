import React, { useEffect, useState } from "react";
import { GlobalStyle } from "./styles/GlobalStyles";
import Main from "./Components/Main/Main";
import Body from "./Components/Body/Body";
import { Employee, Timesheet } from "./Types/EmployeeType";
import { generateEmployee } from "./Data/dataGenerator";
import Total from "./Components/Total/Total";

function App() {
  const [listOfEmployees, setListOfEmployees] = useState<Employee[]>([]);
  const [selectedEmployee, setSelectedEmployee] = useState<Employee>();
  const [selectedWeek, setSelectedWeek] = useState<Timesheet>();
  const [dayInputValue, setDayInputValue] = useState<string>();

  const NUMBER_OF_USERS_TO_GENERATE = 20;
  const NUMBER_OF_WEEKS_TO_GENERATE = 20;

  useEffect(() => {
    let tempListOfEmployess: Employee[] = [];
    for (let i = 0; i < NUMBER_OF_USERS_TO_GENERATE; i++) {
      tempListOfEmployess = [
        ...tempListOfEmployess,
        generateEmployee(NUMBER_OF_WEEKS_TO_GENERATE),
      ];
    }
    setListOfEmployees(tempListOfEmployess);
  }, []);

  useEffect(() => {
    setSelectedEmployee(listOfEmployees[0]);
  }, [listOfEmployees]);

  useEffect(() => {
    selectedEmployee?.timesheets &&
      setSelectedWeek(selectedEmployee.timesheets[0]);
  }, [selectedEmployee]);

  useEffect(() => {
    selectedWeek && calculateTotal(selectedWeek);
  }, [selectedWeek]);

  const handleNameInputClick = (employeeId: string) => {
    let userFound: Employee | undefined = listOfEmployees.find(
      (employee) => employee.employeeId === employeeId
    );
    setSelectedEmployee(userFound);
  };

  const handleDateInputClick = (weekId: string) => {
    let weekFound: Timesheet | undefined = selectedEmployee?.timesheets?.find(
      (week) => week.timesheetId === weekId
    );
    console.log(weekId);
    setSelectedWeek(weekFound);
  };

  const handleDayInputClick = (dayId: string) => {
    console.log(dayId);
    let tempSelectedWeek = selectedWeek;
    let dayFound = tempSelectedWeek?.listOfDays.find(
      (day) => day.dayId === dayId
    );
    // console.log(dayFound);
    // {dayFound?.totalWorkedHours }

    // setSelectedWeek(tempSelectedWeek);
  };

  // useEffect(() => {
  //   console.log("useEffect", dayInputValue);
  // }, [dayInputValue]);

  const [totalWorkedHours, setTotalWorkedHours] = useState<number>();

  const calculateTotal = (timesheet: Timesheet) => {
    let totalWorkedHours = 0;
    timesheet.listOfDays.forEach((element) => {
      totalWorkedHours += element.totalWorkedHours;
    });
    setTotalWorkedHours(totalWorkedHours);
    console.log(totalWorkedHours);
  };

  return (
    <div>
      <GlobalStyle />
      {selectedEmployee && (
        <>
          <Main
            listOfEmployees={listOfEmployees}
            selectedEmployee={selectedEmployee}
            selectedWeek={selectedWeek}
            handleNameInputClick={handleNameInputClick}
            handleDateInputClick={handleDateInputClick}
          />

          <Body
            dayInputValue={dayInputValue}
            handleDayInputChange={handleDayInputClick}
            selectedWeek={selectedWeek}
          />
          {totalWorkedHours && (
            <Total totalWorkedHours={totalWorkedHours} totalSalary={9000} />
          )}
        </>
      )}
    </div>
  );
}

export default App;

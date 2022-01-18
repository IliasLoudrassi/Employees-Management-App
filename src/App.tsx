import React, { useEffect, useState } from "react";
import { GlobalStyle } from "./styles/GlobalStyles";
import Main from "./Components/Main/Main";
import Body from "./Components/Body/Body";
import { DayOfWeek, Employee, Timesheet } from "./Types/EmployeeType";
import { generateEmployee } from "./Data/dataGenerator";
import Total from "./Components/Total/Total";
import Loading from "./Components/Loading/Loading";

function App() {
  const [listOfEmployees, setListOfEmployees] = useState<Employee[]>([]);
  const [selectedEmployee, setSelectedEmployee] = useState<Employee>();
  const [selectedWeek, setSelectedWeek] = useState<Timesheet>();
  const [totalWorkedHours, setTotalWorkedHours] = useState<number>();
  const [totalSalary, setTotalSalary] = useState<number>();
  const [isLoading, setIsLoading] = useState(false);

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

  useEffect(() => {
    selectedWeek && calculateTotal(selectedWeek);
  }, [totalWorkedHours]);

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
    setSelectedWeek(weekFound);
  };

  const handleDayInputChange = (dayId, value: string, e) => {
    setIsLoading(true);
    let tempSelectedEmployee: Employee | undefined = selectedEmployee && {
      ...selectedEmployee,
    };
    let tempWeek: Timesheet | undefined =
      tempSelectedEmployee?.timesheets?.find(
        (week) => week.timesheetId === selectedWeek?.timesheetId
      );

    let tempDay: DayOfWeek | undefined =
      tempWeek && tempWeek.listOfDays.find((day) => day.dayId === dayId);

    setTimeout(() => {
      if (tempDay && value) {
        tempDay.totalWorkedHours = parseInt(value);
        setTotalWorkedHours(tempDay.totalWorkedHours);
        setIsLoading(false);
      }
    }, 2000);
  };

  const calculateTotal = (timesheet: Timesheet) => {
    let totalWorkedHours = 0;
    let totalSalary = 0;
    timesheet.listOfDays.forEach((element) => {
      totalWorkedHours += element.totalWorkedHours;
      totalSalary += element.totalSalary;
    });
    setTotalWorkedHours(totalWorkedHours);
    setTotalSalary(totalSalary);
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
          {isLoading ? (
            <Loading />
          ) : (
            <>
              <Body
                // dayInputValue={dayInputValue}
                handleDayInputChange={handleDayInputChange}
                selectedWeek={selectedWeek}
              />
              {totalWorkedHours && totalSalary && (
                <Total
                  totalWorkedHours={totalWorkedHours}
                  totalSalary={totalSalary}
                />
              )}
            </>
          )}
        </>
      )}
    </div>
  );
}

export default App;

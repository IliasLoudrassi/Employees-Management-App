import { Employee, Timesheet } from "../../Types/EmployeeType";
import FilterInput from "../FilterInput/FilterInput";
import { StyledFilterContainer } from "./styled";

interface Props {
  handleNameInputClick: (id: string) => void;
  handleDateInputClick: (id: string) => void;
  listOfEmployees: Employee[];
  selectedEmployee: Employee;
  selectedWeek?: Timesheet;
}

export default function Filter({
  selectedEmployee,
  listOfEmployees,
  handleNameInputClick,
  handleDateInputClick,
  selectedWeek,
}: Props) {
  return (
    <div>
      {selectedEmployee && (
        <StyledFilterContainer>
          <FilterInput
            filterName="Employee"
            dropdownData={listOfEmployees}
            selectedEmployee={selectedEmployee}
            // selectedWeek={selectedWeek}
            handleNameInputClick={(id) => handleNameInputClick(id)}
            isNameDropdown
          />
          <FilterInput
            filterName="Week"
            dropdownData={listOfEmployees}
            selectedEmployee={selectedEmployee}
            selectedWeek={selectedWeek}
            isDateDropdown
            handleDateInputClick={(id) => handleDateInputClick(id)}
          />
        </StyledFilterContainer>
      )}
    </div>
  );
}

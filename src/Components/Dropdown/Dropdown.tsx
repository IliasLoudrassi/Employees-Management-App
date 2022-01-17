import React from "react";
import { getDateFormatFromTimesheet } from "../../Data/utils";
import { Employee, Timesheet } from "../../Types/EmployeeType";
import { StyledDropdownContainer, StyledDropdownItem } from "./styled";

interface Props {
  isDropdownOpen: boolean;
  dropdownData: Employee[];
  isNameDropdown?: boolean;
  isDateDropdown?: boolean;
  selectedWeek?: Timesheet;
  selectedEmployee: Employee;
  handleNameInputClick?: (id: string) => void;
  handleDateInputClick?: (id: string) => void;
}

export default function Dropdown({
  isDropdownOpen,
  dropdownData,
  isNameDropdown,
  isDateDropdown,
  handleNameInputClick,
  handleDateInputClick,
  selectedEmployee,
  selectedWeek,
}: Props) {
  return (
    <div>
      {isDropdownOpen && (
        <StyledDropdownContainer>
          {isNameDropdown &&
            dropdownData.map((item, index) => (
              <StyledDropdownItem
                key={item.employeeId}
                onClick={() =>
                  handleNameInputClick && handleNameInputClick(item.employeeId)
                }
              >
                {`${item.employeeName} ${item.employeeLastName}`}
              </StyledDropdownItem>
            ))}
          {isDateDropdown &&
            selectedEmployee.timesheets &&
            selectedEmployee.timesheets.map((timesheet, index) => (
              <StyledDropdownItem
                key={index}
                onClick={() => {
                  handleDateInputClick &&
                    selectedWeek &&
                    handleDateInputClick(timesheet.timesheetId);
                }}
              >
                {getDateFormatFromTimesheet(timesheet)}
              </StyledDropdownItem>
            ))}
        </StyledDropdownContainer>
      )}
    </div>
  );
}

import React, { useEffect, useRef, useState } from "react";
import user from "../../assets/SVGs/user.svg";
import { getDateFormatFromTimesheet } from "../../Data/utils";
import { Employee, Timesheet } from "../../Types/EmployeeType";
import Dropdown from "../Dropdown/Dropdown";
import {
  StyledInputContainer,
  StyledInputDisplayedText,
  StyledUserImage,
} from "./styled";

interface Props {
  filterName: string;
  dropdownData: Employee[];
  selectedEmployee: Employee;
  selectedWeek?: Timesheet;
  isNameDropdown?: boolean;
  isDateDropdown?: boolean;
  handleNameInputClick?: (id: string) => void;
  handleDateInputClick?: (id: string) => void;
}

export default function FilterInput({
  filterName,
  dropdownData,
  selectedEmployee,
  selectedWeek,
  isNameDropdown,
  isDateDropdown,
  handleNameInputClick,
  handleDateInputClick,
}: Props) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const doropdownRef = useRef<HTMLDivElement>();

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (
        isDropdownOpen &&
        doropdownRef.current &&
        !doropdownRef.current.contains(e.target)
      ) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("click", checkIfClickedOutside);
  }, [isDropdownOpen]);

  return (
    <div>
      <StyledInputContainer
        isOpen={isDropdownOpen}
        inputName={filterName}
        onClick={() => {
          setIsDropdownOpen(!isDropdownOpen);
        }}
        ref={doropdownRef}
      >
        <StyledUserImage src={user} />
        <StyledInputDisplayedText>
          {isNameDropdown &&
            `${selectedEmployee.employeeName} ${selectedEmployee.employeeLastName}`}
          {isDateDropdown &&
            selectedWeek &&
            getDateFormatFromTimesheet(selectedWeek)}
        </StyledInputDisplayedText>
      </StyledInputContainer>
      <Dropdown
        isNameDropdown={isNameDropdown}
        isDateDropdown={isDateDropdown}
        dropdownData={dropdownData}
        isDropdownOpen={isDropdownOpen}
        selectedEmployee={selectedEmployee}
        selectedWeek={selectedWeek}
        handleNameInputClick={(employeeId) => {
          handleNameInputClick && handleNameInputClick(employeeId);
          setIsDropdownOpen(false);
        }}
        handleDateInputClick={(weekId) => {
          handleDateInputClick && handleDateInputClick(weekId);
          setIsDropdownOpen(false);
        }}
      />
    </div>
  );
}

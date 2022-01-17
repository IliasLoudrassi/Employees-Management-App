import React from "react";
import { Timesheet } from "../../Types/EmployeeType";
import DayInput from "../DayInput/DayInput";
import {
  StyledBodyContainer,
  StyledInputAndSalaryContainer,
  StyledSalaryText,
  StyledSalaryTextContainer,
} from "./styled";

interface Props {
  handleDayInputChange: (id: string) => void;
  dayInputValue: string | undefined;
  selectedWeek?: Timesheet;
}

export default function Body({
  selectedWeek,
  dayInputValue,
  handleDayInputChange,
}: Props) {
  return (
    <div>
      <StyledBodyContainer>
        {selectedWeek?.listOfDays &&
          selectedWeek.listOfDays.map((day, index) => (
            <>
              <StyledInputAndSalaryContainer>
                <DayInput
                  placeholderValue={day.totalWorkedHours.toString()}
                  currenyDay={day.dayName}
                  dayInputValue={dayInputValue}
                  dayOfWeek={day}
                  handleDayInputChange={() => handleDayInputChange(day.dayId)}
                />
                <StyledSalaryTextContainer>
                  <StyledSalaryText>{`€${day.totalSalary}`}</StyledSalaryText>
                </StyledSalaryTextContainer>
              </StyledInputAndSalaryContainer>
            </>
          ))}
      </StyledBodyContainer>
    </div>
  );
}

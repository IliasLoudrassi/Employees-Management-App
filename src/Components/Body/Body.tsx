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
  handleDayInputChange: (id: string, value: string, e?: string) => void;
  selectedWeek?: Timesheet;
}

export default function Body({ selectedWeek, handleDayInputChange }: Props) {
  return (
    <div>
      <StyledBodyContainer>
        {selectedWeek?.listOfDays &&
          selectedWeek.listOfDays.map((day, index) => (
            <>
              <StyledInputAndSalaryContainer>
                <DayInput
                  key={day.dayId}
                  placeholderValue={day.totalWorkedHours.toString()}
                  currentDay={day.dayName}
                  dayOfWeek={day}
                  handleDayInputChange={(id, value) =>
                    handleDayInputChange(id, value)
                  }
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

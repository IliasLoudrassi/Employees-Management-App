import React from "react";
import { DayOfWeek } from "../../Types/EmployeeType";
import { StyledInputContainer, StyledITextnput } from "./styled";

interface Props {
  handleDayInputChange: (id: string) => void;
  dayInputValue: string | undefined;
  currenyDay: string;
  placeholderValue: string;
  dayOfWeek: DayOfWeek;
}

export default function DayInput({
  handleDayInputChange,
  currenyDay,
  placeholderValue,
  dayOfWeek,
  dayInputValue,
}: Props) {
  return (
    <div>
      <StyledInputContainer currentDay={currenyDay}>
        <StyledITextnput
          type="text"
          value={dayInputValue}
          onChange={() => handleDayInputChange(dayOfWeek.dayId)}
          placeholder={placeholderValue}
          maxLength="2"
        />
      </StyledInputContainer>
    </div>
  );
}

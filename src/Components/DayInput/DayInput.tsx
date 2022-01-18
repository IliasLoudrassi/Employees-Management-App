import React, { useEffect, useState } from "react";
import { DayOfWeek } from "../../Types/EmployeeType";
import { StyledInputContainer, StyledITextnput } from "./styled";

interface Props {
  // handleDayInputChange: (id: string, e: string) => void;
  handleDayInputChange: (id: string, value: string, e?: string) => void;
  // dayInputValue: string | undefined;
  currentDay: string;
  placeholderValue: string;
  dayOfWeek: DayOfWeek;
}

export default function DayInput({
  handleDayInputChange,
  currentDay,
  placeholderValue,
  dayOfWeek,
}: Props) {
  const [dayInputValue, setDayInputValue] = useState<string>("");

  useEffect(() => {
    setDayInputValue("");
  }, [placeholderValue, dayOfWeek]);

  const onChange = (e) => {
    setDayInputValue(e.target.value);
    // handleDayInputChange(dayOfWeek.dayId, dayInputValue);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleDayInputChange(dayOfWeek.dayId, dayInputValue);
    }
  };

  return (
    <div>
      <StyledInputContainer currentDay={currentDay}>
        <StyledITextnput
          type="text"
          value={dayInputValue}
          onChange={onChange}
          onKeyDown={handleKeyDown}
          placeholder={placeholderValue}
          maxLength="2"
        />
      </StyledInputContainer>
    </div>
  );
}

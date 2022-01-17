import React, { useState } from "react";
import { Timesheet } from "../../Types/EmployeeType";
import {
  StyledFooterContainer,
  StyledHoursWorkedContainer,
  StyledHoursWorkedText,
  StyledHoursWorkedValue,
  StyledHoursWorkedValuetContainer,
  StyledSalaryContainer,
  StyledSalaryText,
  StyledSalaryValue,
  StyledSalaryValueContainer,
  StyledTextsContainer,
} from "./styled";

interface Props {
  totalWorkedHours: number;
  totalSalary: number;
}

export default function Total({ totalWorkedHours, totalSalary }: Props) {
  return (
    <div>
      <StyledFooterContainer>
        <StyledTextsContainer>
          <StyledHoursWorkedContainer>
            <StyledHoursWorkedText>Hours worked</StyledHoursWorkedText>
            <StyledHoursWorkedValuetContainer>
              <StyledHoursWorkedValue>
                {totalWorkedHours}
              </StyledHoursWorkedValue>
            </StyledHoursWorkedValuetContainer>
          </StyledHoursWorkedContainer>
          <StyledSalaryContainer>
            <StyledSalaryText>Salary</StyledSalaryText>
            <StyledSalaryValueContainer>
              <StyledSalaryValue>{`€${totalSalary}`}</StyledSalaryValue>
            </StyledSalaryValueContainer>
          </StyledSalaryContainer>
        </StyledTextsContainer>
      </StyledFooterContainer>
    </div>
  );
}

import styled from "styled-components";
import { styledTheme } from "../../styles/StyledTheme";

export const StyledFooterContainer = styled.div`
  width: 100%;
  height: 170px;
  background-color: ${styledTheme.colors.lightPurple};
  margin-top: 5px;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledTextsContainer = styled.div`
  width: 160px;
  height: 170px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
`;

export const StyledHoursWorkedContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-top: 30px;
`;

export const StyledHoursWorkedValuetContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

export const StyledHoursWorkedText = styled.span`
  font-weight: 600;
  font-size: 14px;
  margin-right: 50px;
  color: ${styledTheme.colors.Black};
  white-space: nowrap;
`;

export const StyledHoursWorkedValue = styled.div`
  font-weight: 600;
  font-size: 14px;
  color: ${styledTheme.colors.Black};
`;

export const StyledSalaryContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  margin-top: 30px;
`;

export const StyledSalaryValueContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

export const StyledSalaryText = styled.span`
  font-weight: 600;
  font-size: 14px;
  margin-right: 50px;
  color: ${styledTheme.colors.Black};
  white-space: nowrap;
`;

export const StyledSalaryValue = styled.div`
  font-weight: 600;
  font-size: 14px;
  color: ${styledTheme.colors.Black};
`;

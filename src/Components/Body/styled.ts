import styled from "styled-components";
import { styledTheme } from "../../styles/StyledTheme";

export const StyledBodyContainer = styled.div`
  width: 100%;
  min-height: 100%;
  background-color: ${styledTheme.colors.PrimaryWhite};
  padding: 0 20px;
`;

export const StyledInputAndSalaryContainer = styled.div`
  width: 100%;
  margin-top: 10px;
  height: fit-content;
  display: flex;
  align-items: center;
`;

export const StyledSalaryTextContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const StyledSalaryText = styled.h6`
  font-weight: 400;
  font-size: 12px;
  font-weight: 600;
  line-height: 0%;
  color: ${styledTheme.colors.Black};
`;

import styled from "styled-components";
import { styledTheme } from "../../styles/StyledTheme";

export const StyledInputContainer = styled.div<{ currentDay: string }>`
  height: 50px;
  width: 90px;
  border: 2px solid ${styledTheme.colors.purple};
  border-radius: 4px;
  display: flex;
  align-items: center;
  position: relative;
  cursor: text;

  ::before {
    content: "${(props) => props.currentDay}";
    width: fit-content;
    height: 15px;
    position: absolute;
    bottom: 38px;
    left: 6px;
    padding: 0 5px;
    background-color: ${styledTheme.colors.PrimaryWhite};
    font-weight: 500;
    font-size: 11px;
    color: ${styledTheme.colors.purple};
  }
`;

export const StyledITextnput = styled.input`
  height: 40px;
  width: 100%;
  background-color: transparent;
  border-width: 0px;
  outline: none;
  text-align: center;
  box-shadow: none;
  font-weight: 400;
  font-size: 15px;
  color: ${styledTheme.colors.Black};

  ::placeholder {
    color: ${styledTheme.colors.Black};
  }
`;

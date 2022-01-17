import styled from "styled-components";
import { styledTheme } from "../../styles/StyledTheme";

export const StyledInputContainer = styled.div<{
  isOpen: boolean;
  inputName: string;
}>`
  height: 50px;
  width: 100%;
  border: 2px solid ${styledTheme.colors.purple};
  border-radius: 4px;
  display: flex;
  align-items: center;
  position: relative;
  margin-top: 17px;
  cursor: pointer;
  white-space: nowrap;
  -webkit-tap-highlight-color: transparent;

  ::before {
    content: "${(props) => props.inputName}";
    width: fit-content;
    height: 15px;
    position: absolute;
    bottom: 38px;
    left: 6px;
    padding: 0 5px;
    background-color: ${styledTheme.colors.lightPurple};
    font-weight: 500;
    font-size: 11px;
    color: ${styledTheme.colors.purple};
  }

  ::after {
    content: "";
    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-bottom: 5px solid ${styledTheme.colors.purple};
    position: absolute;
    top: 20px;
    right: 10px;
    transform: rotate(${(props) => (props.isOpen ? "-180deg" : "0deg")});
    transition: transform 0.3s ease-in;
  }
`;

export const StyledUserImage = styled.img`
  width: 20px;
  height: 20px;
  margin-left: 6px;
  margin-right: 10px;
`;

export const StyledInputDisplayedText = styled.h6`
  font-weight: 400;
  font-size: 15px;
  color: ${styledTheme.colors.Black};
  margin-right: 80px;
`;

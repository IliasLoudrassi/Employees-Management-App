import styled from "styled-components";
import { styledTheme } from "../../styles/StyledTheme";

export const StyledDropdownContainer = styled.div`
  width: calc(100% - 80px);
  max-height: 200px;
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.175);
  overflow-y: scroll;
  position: absolute;
  z-index: 999;
`;

export const StyledDropdownItem = styled.span`
  width: 100%;

  font-weight: 400;
  font-size: 15px;
  color: ${styledTheme.colors.Black};
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 15px;
  background-color: ${styledTheme.colors.PrimaryWhite};
  cursor: pointer;
  :hover {
    background-color: ${styledTheme.colors.lightPurple};
  }
`;

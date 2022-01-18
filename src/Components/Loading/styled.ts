import styled from "styled-components";
import { styledTheme } from "../../styles/StyledTheme";

export const StyledLoadingContainer = styled.div`
  width: 100%;
  min-height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledLoading = styled.div`
  border: 10px solid ${styledTheme.colors.lightPurple}; /* Light grey */
  border-top: 10px solid ${styledTheme.colors.purple}; /* Blue */
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: spin 2s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

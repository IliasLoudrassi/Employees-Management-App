import React from "react";
import { StyledLoading, StyledLoadingContainer } from "./styled";

export default function Loading() {
  return (
    <div>
      <StyledLoadingContainer>
        <StyledLoading />
      </StyledLoadingContainer>
    </div>
  );
}

import styled from "styled-components";

const StyledHeadingWrapper = styled.div`
  display: flex;
  justify-content: center;

  @media screen and (min-width: 576px) {
    width: 70%;
  }

  @media screen and (min-width: 1024px) {
    width: 50%;
  }
`;

const StyledHeading = styled.div`
  display: flex;
  flex-direction: column;
  width: 70vw;
`;

const StyledH1 = styled.h1`
  margin: 0.3em 0;
  font-weight: 600;
`;

const StyledText = styled.p`
  color: #777;
  margin: 0.5em 0 0.7em;
`;

export { StyledHeadingWrapper, StyledHeading, StyledH1, StyledText };

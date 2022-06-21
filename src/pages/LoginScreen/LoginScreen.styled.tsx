import styled from "styled-components";

const StyledPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 100vh;

  @media screen and (min-width: 576px) {
    flex-direction: row;
  }
`;
const StyledLeftSideWrapper = styled.div`
  width: 100vw;
  height: 50vh;
  justify-content: center;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 576px) {
    width: 50vw;
    height: 100vh;
  }
`;

const StyledRightSideWrapper = styled.div`
  width: 100vw;
  background-color: #f2f2f2;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50vh;

  @media screen and (min-width: 576px) {
    width: 50vw;
    height: 100vh;
  }
`;

export { StyledPageWrapper, StyledLeftSideWrapper, StyledRightSideWrapper };

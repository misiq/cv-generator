import styled from "styled-components";

const StyledPageWrapper = styled.div`
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-evenly;
  min-height: 100vh;

  @media screen and (min-width: 576px) {
    flex-direction: row;
  }
`;
const StyledLeftSideWrapper = styled.div`
  width: 100vw;
  height: 80vh;
  justify-content: flex-start;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15vh 0;

  @media screen and (min-width: 576px) {
    width: 50vw;
    height: 100vh;
    justify-content: center;
    padding: 0;
  }
`;

const StyledRightSideWrapper = styled.div`
  width: 100vw;
  background-color: ${(props) => props.theme.lightGreyBackground};
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20vh;

  img {
    max-width: 75px;
  }

  @media screen and (min-width: 576px) {
    img {
      max-width: unset;
    }
  }

  @media screen and (min-width: 576px) {
    width: 50vw;
    height: 100vh;
  }
`;

export { StyledPageWrapper, StyledLeftSideWrapper, StyledRightSideWrapper };

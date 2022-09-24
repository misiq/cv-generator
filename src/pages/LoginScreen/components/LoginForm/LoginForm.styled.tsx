import styled from "styled-components";

const StyledFormWrapper = styled.div`
  display: flex;
  justify-content: center;

  @media screen and (min-width: 576px) {
    width: 70%;
  }
  @media screen and (min-width: 1024px) {
    width: 50%;
  }
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 70vw;
`;

const StyledLabel = styled.label`
  text-align: left;
  font-weight: 600;
  padding: 15px 0 5px 0;
  color: ${(props) => props.theme.textMainColor};
`;

const StyledInput = styled.input`
  all: unset;
  border: 1px solid ${(props) => props.theme.lightGreyBorder};
  border-radius: 7px;
  padding: 10px 15px;
  color: ${(props) => props.theme.textMainColor};
`;

const StyledErrorWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const StyledError = styled.span`
  color: ${(props) => props.theme.errorTextColor};
  background-color: ${(props) => props.theme.errorBackgroundColor};
  padding: 5px;
  margin-top: 5px;
`;

const StyledButton = styled.button`
  margin-top: 15px;
  border: 1px solid ${(props) => props.theme.buttonBackgroundColor};
  border-radius: 7px;
  padding: 10px 15px;
  color: ${(props) => props.theme.buttonTextColor};
  background-color: ${(props) => props.theme.buttonBackgroundColor};
  font-size: 18px;
  font-weight: 500;
  cursor: pointer;
`;

export {
  StyledFormWrapper,
  StyledForm,
  StyledLabel,
  StyledInput,
  StyledErrorWrapper,
  StyledError,
  StyledButton,
};

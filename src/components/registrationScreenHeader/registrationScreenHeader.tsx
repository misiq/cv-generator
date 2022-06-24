import {
  StyledHeadingWrapper,
  StyledHeading,
  StyledH1,
  StyledText,
} from "../header/Header.styled";

const RegistrationScreenHeader = () => {
  return (
    <StyledHeadingWrapper>
      <StyledHeading>
        <StyledH1>Hi there!</StyledH1>
        <StyledText>Enter your details to register</StyledText>
      </StyledHeading>
    </StyledHeadingWrapper>
  );
};

export default RegistrationScreenHeader;

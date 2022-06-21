import {
  StyledHeadingWrapper,
  StyledHeading,
  StyledH1,
  StyledText,
} from "./Header.styled";

const HeaderRegister = () => {
  return (
    <StyledHeadingWrapper>
      <StyledHeading>
        <StyledH1>Hi there!</StyledH1>
        <StyledText>Enter your details to register</StyledText>
      </StyledHeading>
    </StyledHeadingWrapper>
  );
};

export default HeaderRegister;

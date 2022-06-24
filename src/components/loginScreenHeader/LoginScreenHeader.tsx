import {
  StyledHeadingWrapper,
  StyledHeading,
  StyledH1,
  StyledText,
} from "./LoginScreenHeader.styled";

const Header = () => {
  return (
    <StyledHeadingWrapper>
      <StyledHeading>
        <StyledH1>Welcome back</StyledH1>
        <StyledText>Welcome back! Enter your details</StyledText>
      </StyledHeading>
    </StyledHeadingWrapper>
  );
};

export default Header;

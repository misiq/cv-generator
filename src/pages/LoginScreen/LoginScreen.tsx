import Header from "../../components/header/Header";
import LoginForm from "./components/LoginForm";
import LogoImage from "./LoginScreenLogo/logo.png";
import {
  StyledPageWrapper,
  StyledLeftSideWrapper,
  StyledRightSideWrapper,
} from "./LoginScreen.styled";

const LoginScreen = () => {
  return (
    <StyledPageWrapper>
      <StyledLeftSideWrapper>
        <Header />
        <LoginForm />
      </StyledLeftSideWrapper>
      <StyledRightSideWrapper>
        <img src={LogoImage} alt="Logo" />
      </StyledRightSideWrapper>
    </StyledPageWrapper>
  );
};

export default LoginScreen;

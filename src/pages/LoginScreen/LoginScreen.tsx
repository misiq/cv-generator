import LoginScreenHeader from "../../components/loginScreenHeader/LoginScreenHeader";
import LoginForm from "./components/LoginForm";
import LogoImage from "./LoginScreenLogo/logo.png";
import {
  StyledPageWrapper,
  StyledLeftSideWrapper,
  StyledRightSideWrapper,
} from "./LoginScreen.styled";
import { ThemeProvider } from "styled-components";

const theme = {
  lightGreyBackground: "#f2f2f2",
  lightGreyBorder: "#dbdbdb",
  textMainColor: "#333",
  buttonTextColor: "#fff",
  buttonBackgroundColor: "#8a2be2",
  errorTextColor: "#fff",
  errorBackgroundColor: "#df4b4b",
};

const LoginScreen = () => {
  return (
    <ThemeProvider theme={theme}>
      <StyledPageWrapper>
        <StyledLeftSideWrapper>
          <LoginScreenHeader />
          <LoginForm />
        </StyledLeftSideWrapper>
        <StyledRightSideWrapper>
          <img src={LogoImage} alt="Logo" />
        </StyledRightSideWrapper>
      </StyledPageWrapper>
    </ThemeProvider>
  );
};

export default LoginScreen;

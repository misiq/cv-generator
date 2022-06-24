import RegistrationScreenHeader from "../../components/registrationScreenHeader/registrationScreenHeader";
import RegistrationForm from "./components/RegistrationForm/RegistrationForm";
import {
  StyledPageWrapper,
  StyledLeftSideWrapper,
  StyledRightSideWrapper,
} from "../LoginScreen/LoginScreen.styled";
import LogoImage from "../LoginScreen/LoginScreenLogo/logo.png";
import { ThemeProvider } from "styled-components";
import { theme } from "../../globalStyles/GlobalStyles";

const RegistrationScreen = () => {
  return (
    <StyledPageWrapper>
      <StyledLeftSideWrapper>
        <RegistrationScreenHeader />
        <RegistrationForm />
      </StyledLeftSideWrapper>
      <StyledRightSideWrapper>
        <img src={LogoImage} alt="Logo" />
      </StyledRightSideWrapper>
    </StyledPageWrapper>
  );
};

export default RegistrationScreen;

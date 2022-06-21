import HeaderRegister from "../../components/header/HeaderRegister";
import RegistrationForm from "./components/RegistrationForm/RegistrationForm";
import {
  StyledPageWrapper,
  StyledLeftSideWrapper,
  StyledRightSideWrapper,
} from "../LoginScreen/LoginScreen.styled";
import LogoImage from "../LoginScreen/LoginScreenLogo/logo.png";

const RegistrationScreen = () => {
  return (
    <StyledPageWrapper>
      <StyledLeftSideWrapper>
        <HeaderRegister />
        <RegistrationForm />
      </StyledLeftSideWrapper>
      <StyledRightSideWrapper>
        <img src={LogoImage} alt="Logo" />
      </StyledRightSideWrapper>
    </StyledPageWrapper>
  );
};

export default RegistrationScreen;

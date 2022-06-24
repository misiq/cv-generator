import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    font-family: 'Roboto', sans-serif;
    margin: 0;
    padding: 0;
`;

const theme = {
  lightGreyBackground: "#f2f2f2",
  lightGreyBorder: "#dbdbdb",
  textMainColor: "#333",
  buttonTextColor: "#fff",
  buttonBackgroundColor: "#8a2be2",
  errorTextColor: "#fff",
  errorBackgroundColor: "#df4b4b",
};

export { GlobalStyle, theme };

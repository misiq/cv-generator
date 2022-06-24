import ValidateFunctionArguments from "./LoginForm.type";
import { FC } from "react";
import { useFormik } from "formik";
import {
  StyledFormWrapper,
  StyledForm,
  StyledLabel,
  StyledInput,
  StyledErrorWrapper,
  StyledError,
  StyledButton,
} from "./LoginForm.styled";

const validate = (values: ValidateFunctionArguments) => {
  const errors = {
    email: "",
    password: "",
  };
  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  if (!values.password) {
    errors.password = "Required";
  } else if (values.password.length < 8) {
    errors.password = "Must be at least 8 characters";
  }
  return errors;
};

const LoginForm: FC = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate,
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <StyledFormWrapper>
      <StyledForm onSubmit={formik.handleSubmit}>
        <StyledLabel htmlFor="email">Email</StyledLabel>
        <StyledInput
          type="email"
          name="email"
          onChange={formik.handleChange}
          value={formik.values.email}
          placeholder="Enter your email"
        />
        {formik.errors.email && (
          <StyledErrorWrapper>
            <StyledError>{formik.errors.email}</StyledError>
          </StyledErrorWrapper>
        )}
        <StyledLabel htmlFor="password">Password</StyledLabel>
        <StyledInput
          type="password"
          name="password"
          onChange={formik.handleChange}
          value={formik.values.password}
          placeholder="&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;"
        />
        {formik.errors.password && (
          <StyledErrorWrapper>
            <StyledError>{formik.errors.password}</StyledError>
          </StyledErrorWrapper>
        )}
        <StyledButton type="submit">Sign in</StyledButton>
      </StyledForm>
    </StyledFormWrapper>
  );
};

export default LoginForm;

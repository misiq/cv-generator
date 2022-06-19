import ValidateFunctionArguments from "./LoginForm.type";
import { FC } from "react";
import { useFormik } from "formik";

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
  console.log(formik.values.password);
  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="email">Email</label>
      <input
        type="email"
        name="email"
        onChange={formik.handleChange}
        value={formik.values.email}
      />
      {formik.errors.email && <span>{formik.errors.email}</span>}
      <label htmlFor="password">Password</label>
      <input
        type="password"
        name="password"
        onChange={formik.handleChange}
        value={formik.values.password}
      />
      {formik.errors.password && <span>{formik.errors.password}</span>}
      <button type="submit">Sign In</button>
    </form>
  );
};

export default LoginForm;

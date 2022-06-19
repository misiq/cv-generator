import { Formik, ErrorMessage } from "formik";
import InitialValuesState from "./LoginForm.type";
import { FC } from "react";
import { useFormik } from "formik";

const LoginForm: FC = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="email">Email</label>
      <input
        type="email"
        name="email"
        onChange={formik.handleChange}
        value={formik.values.email}
      />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        name="password"
        onChange={formik.handleChange}
        value={formik.values.password}
      />
      <button type="submit">Sign In</button>
    </form>
  );
};

export default LoginForm;

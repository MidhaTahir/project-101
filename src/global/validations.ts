import { FormikValues } from "formik";

export const validateAuthUser = (values: FormikValues) => {
  type Error = {
    firstName?: string;
    lastName?: string;
    username?: string;
    email?: string;
    password?: string;
    phone?: string;
    userType?: string;
  };
  const errors: Error = {};
  if (!values.firstName) {
    errors.firstName = "⋆Required";
  }
  if (!values.lastName) {
    errors.lastName = "⋆Required";
  }
  if (!values.username) {
    errors.username = "⋆Required";
  }
  if (!values.password) {
    errors.password = "⋆Required";
  }
  if (!values.phone) {
    errors.phone = "⋆Required";
  }
  if (!values.email) {
    errors.email = "⋆Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email format";
  }
  return errors;
};

import * as Yup from "yup";

export const registerValidationSchema = Yup.object().shape({
  username: Yup.string().required("Username is required"),
  email: Yup.string()
    .email("Email format is invalid")
    .required("Email is required"),
  password: Yup.string().required("Password is required"),
});

import * as yup from "yup";

export default yup.object().shape({

  phone: yup
    .string()
    .required("Valid Phone Number is required"),

  password: yup
    .string()
    .required("Password is required")
    .min(8, "password must be at least 8 characters"),

  
});
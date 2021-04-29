import * as yup from "yup";

export default yup.object().shape({
    
  username: yup
    .string()
    .required("Username is required")
    .min(6, "username must be at least 6 characters"),

  phoneNumber: yup
    .string()
    .required("Valid Phone Number is required")
    .min(8, "Phone Number must be at least 8 numbers"),

  password: yup
    .string()
    .required("Password is required")
    .min(8, "password must be at least 8 characters"),


});
import * as yup from "yup";

export default yup.object().shape({
    
  username: yup
    .string()
    .required("Username is required")
    .min(6, "username must be at least 6 characters"),

  phoneNumber: yup
    .string()
    .required("Valid Phone Number is required"),

  password: yup
    .string()
    .required("Password is required")
    .min(8, "password must be at least 8 characters"),

  nickname: yup
    .string()
    .required("Nickname is required")
    .min(6, "nickname must be at least 6 characters"),

  species: yup
    .string()
    .required("Species is required")
    .min(6, "species must be at least 6 characters"),

  h20Frequency: yup
    .string()
    .required("Watering Frequency is required")
    .oneOf(["daily", "twicePerWeek", "weekly"], "watering frequency is required"),


});
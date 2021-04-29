import * as yup from "yup";

export default yup.object().shape({

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
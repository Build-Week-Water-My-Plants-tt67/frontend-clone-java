import React, {useState, useEffect} from "react";
import SignUp from './SignUp';
import schema from './formSchema'
import * as yup from 'yup';
import axios from 'axios';

const initialFormValues = {
  username: "",
  phoneNumber: "",
  password: "",
};
const initialFormErrors = {
  username: "",
  phoneNumber: "",
  password: "",
};
const initialSignup = [];
const initialDisabled = true;

const App = () => {

    const [signUp, setSignUp] = useState(initialSignup);
    const [formValues, setFormValues] = useState(initialFormValues); 
    const [formErrors, setFormErrors] = useState(initialFormErrors); 
    const [disabled, setDisabled] = useState(initialDisabled); 
      
    
      const postNewSignUp = (newSignUp) => {
          axios
            .post("https://reqres.in/api/orders", newSignUp)
            .then((res) => {
              setSignUp([res.data, ...signUp]);
              setFormValues(initialFormValues);
              console.log(res.data);
            })
            .catch((err) => {
              console.log(err);
            });
        };
      
      const inputChange = (name, value) => {
          yup
            .reach(schema, name) 
            .validate(value) 
            .then(() => {
              setFormErrors({
                ...formErrors,
                [name]: "",
              });
            })
            .catch((err) => {
              setFormErrors({
                ...formErrors,
                [name]: err.errors[0],
              });
            });
      
          setFormValues({
            ...formValues,
            [name]: value, 
          });
        };
      
      const formSubmit = () => {
          const newSignUp = {
            username: formValues.username.trim(),
            phoneNumber: formValues.phoneNumber.trim(),
            password: formValues.password.trim(),
          };
          postNewSignUp(newSignUp);
        };
          
            useEffect(() => {
              schema.isValid(formValues).then((valid) => {
                setDisabled(!valid);
              });
            }, [formValues]);

     
  return (
    <>
      <div>
      
          <SignUp 
              values={formValues}
              change={inputChange}
              submit={formSubmit}
              disabled={disabled}
              errors={formErrors}
              />
      </div>
      
    </>
  );
};
export default App;








  
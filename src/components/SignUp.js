import React, { useState, useEffect } from 'react';
import * as yup from 'yup';
import schema from './formSchema';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

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


export default function Form() {

  const [formValues, setFormValues] = useState(initialFormValues); 
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [signUp, setSignUp] = useState(initialSignup);
  const [disabled, setDisabled] = useState(initialDisabled); 

  const { push } = useHistory();

  const postNewSignUp = (newSignUp) => {
    axios
      .post("https://reqres.in/api/orders", newSignUp)
      .then((res) => {
        setSignUp([res.data, ...signUp]);
        setFormValues(initialFormValues);
        console.log(res.data);
        push("/login");
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
  
  const onChange = evt => {
    const { name, value } = evt.target
    inputChange(name, value)
  }

  const onSubmit = evt => {
      evt.preventDefault()
      formSubmit()
  }

  return (
    <>
      <div>
          <div>

          <form onSubmit={onSubmit} id="signup-form">
              <div>
                <em>
                <div>{formErrors.username}</div>
                <div>{formErrors.phoneNumber}</div>
                <div>{formErrors.password}</div>
                </em>
              </div>
              <div>
              <label><h4>Username: </h4>
                <input
                  type="text"
                  value={formValues.username}
                  onChange={onChange}
                  name="username"
                  id="name-input"
                  placeholder="Username"
                  maxLength="30"
                />
              </label>

              <label><h4>Phone Number: </h4>
                <input
                  type="text"
                  value={formValues.phoneNumber}
                  onChange={onChange}
                  name="phoneNumber"
                  id="number-input"
                  placeholder="Phone Number"
                  maxLength="30"
                />
              </label>

              <label><h4>Password: </h4>
                <input
                  type="password"
                  value={formValues.password}
                  onChange={onChange}
                  name="password"
                  id="pwd-input"
                  placeholder="Password"
                  maxLength="30"
                />
              </label>
              <div id="submit">
                <button id="submit" disabled={disabled}>Sign Up</button>
              </div>
          </div>
          </form>
        </div>
    </div>
  </>
  )
}

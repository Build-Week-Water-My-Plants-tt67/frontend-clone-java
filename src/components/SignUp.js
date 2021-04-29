import React, { useState, useEffect } from 'react';
import * as yup from 'yup';
import schema from './schema/formSchema';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

const StyledSignUp = styled.div`
  padding: 2% 2%;

  label{
    margin-bottom: 2%;
  }
  `

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
      <StyledSignUp>
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
                <h1>Sign Up With Us Today!</h1>
              <label>Username:
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
                <br/>
                <br/>
              <label>Phone Number:
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
              <br/>
              <br/>
              <label>Password: 
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
              <br/>
              <div id="submit">
                <button id="submit" disabled={disabled}>Sign Up</button>
              </div>
          </div>
          </form>
        </div>
    </StyledSignUp>
  </>
  )
}

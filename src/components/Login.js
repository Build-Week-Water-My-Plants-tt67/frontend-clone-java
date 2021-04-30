import React, { useState } from 'react'
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { userLoginSuccess, userLoginFailure, userLoginStart } from '../store/actions';
import axios from "axios";
import styled from 'styled-components';

const StyledLogin = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  padding: 2% 0;


  button{
    background-color: #ddd;
    color: #333;
    font-family: sans-serif;
    font-size: .8rem;
    padding: 1% 2%;
    border-radius: 10px;
    font-weight: bold;
    margin: 2%;

        &:hover {
        background-color: rgba(104, 104, 104, 0.8);
        color: white;
        transition: all 1s ease-in-out;
        }
 
  }
`


const LoginForm = (props) => {

    const { push } = useHistory();
    const [details, setDetails] = useState({username: "", password: ""});
    const { userLoginSuccess, userLoginFailure, isCallingAPI, error } = props;

    const submitHandler = evt => {
      evt.preventDefault();
      axios
        .post(
          "https://bw-tt-67-water-my-plants.herokuapp.com/api/login",
          `grant_type=password&username=${details.username}&password=${details.password}`,
          {
            headers: {
              // btoa is converting our client id/client secret into base64
              Authorization: `Basic ${btoa("lambda-client:lambda-secret")}`,
              "Content-Type": "application/x-www-form-urlencoded",
            },
          },
        )
        .then((res) => {
          console.log(res.data);
          localStorage.setItem("token", res.data.access_token);
          props.history.push("/");
        });
        
    }

    return (
      <div className="login">
        { (isCallingAPI) ? (<h2>Please wait, checking credentials</h2>): 
            (
            <form onSubmit={submitHandler}>
                <StyledLogin>
                   
                    {(error !== "") ? (<div className= "error">{error}</div>) : ""}
                    <div className= "form-group">
                        <label>Username: </label>
                        <input
                            type= "text"
                            name= "username"
                            placeholder= "Enter a username..."
                            onChange= {evt => 
                                setDetails({...details, username: evt.target.value})} 
                                value= {details.username}/>
                    </div>
                    <div className= "form-group">
                        <label>Password: </label>
                        <input  
                            type= "password"
                            name= "password"
                            placeholder= "Enter a password..."
                            onChange= {evt => 
                                setDetails({...details, password: evt.target.value})} 
                                value= {details.password}/>
                    </div>
                    <button id="submit" type="submit">Login</button>
                </StyledLogin>
            </form>
            )}
      </div>
    )
}

const mapStateToProps = (state) => {
  return {
    isCallingAPI: state.user.isCallingAPI,
    error: state.user.error,
  }
}

export default connect(mapStateToProps, { userLoginSuccess, userLoginFailure, userLoginStart })(LoginForm);
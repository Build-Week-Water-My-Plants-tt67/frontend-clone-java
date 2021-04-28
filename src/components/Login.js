import React, { useState } from 'react'
import { connect } from 'react-redux';
import { userLogin } from '../store/actions';

const LoginForm = (props) => {
    const [details, setDetails] = useState({username: "", password: ""});
    const { isCallingAPI, error } = props;

    const submitHandler = evt => {
        evt.preventDefault();
        userLogin("https://water-my-plants-tt67.herokuapp.com/users/login", details);
    }

    return (
      <div className="login">
        { (isCallingAPI) ? (<h2>Please wait, checking credentials</h2>): 
            (
            <form onSubmit={submitHandler}>
                <div className= "form-inner">
                    <h2>Login</h2>
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
                    <input
                        type="submit"
                        value= "Submit"/>
                </div>
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

export default connect(mapStateToProps, { userLogin })(LoginForm);
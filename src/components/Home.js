import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Home = () => {
  
  const StyledHome = styled.div`
    display: flex;
  `
  const StyledContent = styled.div`
  background-color: #f8f5f1;
  padding: 3% 3%;
  line-height: 1.5;
  text-align: center;
  color: #4f4f4f;
  width: 80%;

  h1{
    font-size: 2.4rem;
  }

  input{
    padding: 2%;
    width: 40%;
    margin: 1%;
    text-align: justify;
  }
  button{
    background-color: #ddd;
    color: #333;
    font-family: sans-serif;
    font-size: .8rem;
    padding: 2% 5%;
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
  const StyledImage = styled.div`

  width: 100%;
  height: 100vh;
  object-fit: cover; 
  background-image: url('https://images.unsplash.com/photo-1537401845705-1a04003a2973?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80');
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;       

`

  return (
    <>

    <StyledHome>
      <StyledImage>

      </StyledImage>
      <StyledContent>
        <h1>Welcome to Water My Plants!</h1>
          
        <h3>If you are looking for help automating a watering schedule for all of the important foliage in your life, you've come to the right place!</h3>
        
        <h3>Our app is compatible with multiple Smart Home managers, including Alexa, Apple HomeKit, Google Assistant, and ITTT. Click below to sign up, or if you are a returning user, login.</h3>
        <br/>
      </StyledContent>
    </StyledHome>
    </>
  )
}

export default Home;

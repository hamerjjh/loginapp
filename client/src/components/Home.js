import React, { Component } from 'react';
import axios from 'axios';
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import styled from "styled-components"


const Header = styled.div`
  h1, h2, h3{
    text-align: center;
  }
`

const LoginContainer = styled.div`
    display: flex;
     box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.3), 0 8px 22px 0 rgba(0, 0, 0, 0.29);
     width: 60%;
     height: 400px;
     margin: 20px auto;
     align-items: center;
     justify-content: center;
      background-color:rgba(244, 245, 247,.7);
`
const SignUpSection = styled.div` 
    top: 0;
    right: 0;
    background-color: rgba(249, 168, 74, .5);
    height: 100%;
    width: 100%;
    padding-right: 0px;
    margin-right: 0px;
    
`

const SignInSection = styled.div`
    top: 0;
    left: 0;
   background-color: rgba(255,255,224, .5);
   height: 100%;
   width: 100%;
`

const OrCircle = styled.div` 
  position: relative;
  left: 95%;
  width: 40px;
  height: 40px;
  background-color: #c3cbd8;
  border-radius: 50%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
  line-height: 40px;
  text-align: center;
    font-family: 'Cabin Condensed', sans-serif;
`
class Home extends Component {

  render() {
    return (
      <div>
        <Header>
        <h1>Welcome to the leader in digital content management</h1>
        <h2>Please Register or Sign in Below!</h2>
        <h3>Created By: Jonathan Hamer</h3>
        </Header>


        <LoginContainer>
          <SignInSection>
            <SignIn />

            <OrCircle>OR</OrCircle>
          </SignInSection>

        <SignUpSection>
          <SignUp />
        </SignUpSection>
 
        </LoginContainer>
        

      </div>
    );
  }
}

export default Home;
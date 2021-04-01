import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom'
import styled from 'styled-components'

const SignInFormStyles = styled.div`
    h2, form {
        padding-top: 5px;
        text-align: center;
        font-size: 20px;
        font-family: 'Cabin Condensed', sans-serif;
    }
`
const ErrorMessage = styled.div `
    font-size: 14px;
    color: red;
`



class SignIn extends Component {
    state = {
        newUser: {
            email: "",
            password: "",

        },
        emailError: "",
        passwordError:"",
        redirectToUserPage: false,
        newUserId: ""
    }

    handleChange = (event) => {
        const attribute = event.target.name
        const updateUser = {...this.state.newUser}
        updateUser[attribute] = event.target.value
        this.setState({newUser: updateUser})
    }

    validate = () => {

        let emailError = "";
        let passwordError = "";

        if (!this.state.newUser.email.includes("@")){
            emailError = "Invalid Email";
        }

        if (this.state.newUser.password.length < 5){
            passwordError = "Password Must have 5 Characters"
        }
        if (emailError || passwordError){
            this.setState({ emailError, passwordError});
            return false;
        }
        return true;
    }

    handleSubmit = async (event) => {
        event.preventDefault()
        // const res = await axios.post('/api/users', {
        //     'user': this.state.newUser
        // })
        // console.log(res.data)
        // this.setState({ redirectToUserPage: true, newUserId: res.data.id})
        const isValid = this.validate(); 
        if (isValid === true ){
            this.setState({redirectToUserPage: true})
        }
        
       
       
    }

    render() {
        if (this.state.redirectToUserPage) {
            return <Redirect to={'/user'} />
        }
        return (
            <SignInFormStyles>
         
                <h2> Sign-In </h2>
   

            <form onSubmit={this.handleSubmit}>
            <div>
            <label htmlFor="email">User Email </label>
            <input onChange={this.handleChange} name="email" type="text" value={this.state.newUser.email} />
                    <ErrorMessage>{this.state.emailError}</ErrorMessage>
            </div>
            <div>
            <label htmlFor="password">Password </label>
            <input onChange={this.handleChange} name="password" type="password" value={this.state.newUser.password} />
                <ErrorMessage>{this.state.passwordError}</ErrorMessage>
            </div>
            <button type="submit"> Sign In </button>
            </form>

     

            </SignInFormStyles>
        );
    }
}

export default SignIn;
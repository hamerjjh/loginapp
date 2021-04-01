import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom'
import styled from 'styled-components'

const SignUpFormStyles = styled.div`
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



class SignUp extends Component {
    state = {
        newUser: {
            first_name: "",
            last_name: "",
            email: "",
            password: "",

        },
        firstNameError:"",
        lastNameError: "",
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
        let firstNameError = "";
        let lastNameError = "";
        let emailError = "";
        let passwordError = "";
        

        if (!this.state.newUser.first_name){
            firstNameError = "Must Enter First Name";
        }
        if (!this.state.newUser.last_name){
            lastNameError = "Must Enter Last Name";
        }
        if (!this.state.newUser.email.includes("@")){
            emailError = "Invalid Email";
        }

        if (this.state.newUser.password.length < 5){
            passwordError = "Password Must have 5 Characters"
        }
        if (firstNameError || lastNameError ||emailError || passwordError){
            this.setState({ firstNameError, lastNameError, emailError, passwordError});
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
            <SignUpFormStyles>
         
                <h2> Register (Sign Up) </h2>
   

            <form onSubmit={this.handleSubmit}>
            <div>
            <label htmlFor="first_name">First Name </label>
            <input onChange={this.handleChange} name="first_name" type="text" value={this.state.newUser.first_name} />
            <ErrorMessage>{this.state.firstNameError}</ErrorMessage>
            </div>
            <div>
            <label htmlFor="last_name">Last Name </label>
            <input onChange={this.handleChange} name="last_name" type="text" value={this.state.newUser.last_name} />
            <ErrorMessage>{this.state.lastNameError}</ErrorMessage>
            </div>
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
            <button> Sign Up </button>
            </form>

     

            </SignUpFormStyles>
        );
    }
}

export default SignUp;
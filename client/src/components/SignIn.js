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




class SignIn extends Component {
    state = {
        newUser: {
            email: "",
            passowrd: "",

        },
        emailError: "",
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

        if (!this.state.newUser.email.includes("@")){
            emailError = "Invalid Email";
        }
        if (emailError){
            this.setState({ emailError});
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
                    <div>{this.state.emailError}</div>
            </div>
            <div>
            <label htmlFor="password">Password </label>
            <input onChange={this.handleChange} name="password" type="password" value={this.state.newUser.password} />
            </div>
            <button type="submit"> Sign In </button>
            </form>

     

            </SignInFormStyles>
        );
    }
}

export default SignIn;
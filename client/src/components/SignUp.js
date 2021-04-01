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




class SignUp extends Component {
    state = {
        newUser: {
            first_name: "",
            last_name: "",
            email: "",
            passowrd: "",

        },
        redirectToUserPage: false,
        newUserId: ""
    }

    handleChange = (event) => {
        const attribute = event.target.name
        const updateUser = {...this.state.newUser}
        updateUser[attribute] = event.target.value
        this.setState({newUser: updateUser})
    }

    handleSubmit = async (event) => {
        event.preventDefault()
        const res = await axios.post('/api/users', {
            'user': this.state.newUser
        })
        console.log(res.data)
        this.setState({ redirectToUserPage: true, newUserId: res.data.id})
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
            </div>
            <div>
            <label htmlFor="last_name">Last Name </label>
            <input onChange={this.handleChange} name="last_name" type="text" value={this.state.newUser.last_name} />
            </div>
            <div>
            <label htmlFor="email">User Email </label>
            <input onChange={this.handleChange} name="email" type="text" value={this.state.newUser.email} />
            </div>
            <div>
            <label htmlFor="password">Password </label>
            <input onChange={this.handleChange} name="password" type="text" value={this.state.newUser.password} />
            </div>
            <button> Sign Up </button>
            </form>

     

            </SignUpFormStyles>
        );
    }
}

export default SignUp;
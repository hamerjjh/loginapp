import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'
import styled from "styled-components"

const Header = styled.div`
  h1, h2, h3, button{
    text-align: center;
  }
`
const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  

`

class User extends Component {

  render() {
    return (
      <div>
        <Header>
        <h1>Welcome User</h1>
        </Header>
        <Button> <Link to="/">Log Out</Link></Button>
  

        
      </div>
    );
  }
}

export default User;
import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'



class User extends Component {

  render() {
    return (
      <div>
        <h1>Welcome User</h1>
        <button> <Link to="/">Log Out</Link></button>
        
      </div>
    );
  }
}

export default User;
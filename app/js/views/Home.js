import React, { Component } from 'react';
import { Link } from 'react-router';


export default class Home extends Component {
  render() {
    return (
      <div className='Home'>
        <h1>Create New User</h1>
        <div className="right-content-details">
          <p>Create a new user account by clicking the</p>
          <p>New account button below</p>
          <div className="user-info">
            <button><span className="glyphicon glyphicon-plus" aria-hidden="true"></span><Link to='/createUser'>Create New User</Link></button>
            <button><span className="glyphicon glyphicon-plus" aria-hidden="true"></span><Link to='/updateUser'>Edit Existing User</Link></button>
          </div>
        </div>
      </div>
    );
  }
}

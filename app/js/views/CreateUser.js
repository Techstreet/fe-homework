import React, { Component } from 'react';
// import UserForm from 'components/UserForm'
import App from 'views/App'

export default class CreateUser extends App {
  constructor() {
    super();
    this.state = {
      users: JSON.parse(localStorage.getItem('users')),
      email: '',
      fname: '',
      lname: '',
      everFocusedEmail: false,
      everFocusedLname: false,
      everFocusedFname: false,
      inFocus: '',
      submit :false
    };
  }

  handleEmailChange (evt)  {
    this.setState({ email: evt.target.value });
  }

  handleFnameChange (evt){
    this.setState({ fname: evt.target.value });
  }

  handleLnameChange (evt)  {
    this.setState({ lname: evt.target.value });
  }

  handleSubmit (evt) {
    evt.preventDefault( );
    evt.stopPropagation()
    this.setState({submit:true});
    this.canBeSubmitted();
    console.log(this.canBeSubmitted());
    debugger
    if( this.state.email && this.state.fname && this.state.lname) {
      let users = this.state.users;
      users.push({email: this.state.email, fname: this.state.fname, lname: this.state.lname})
      const { email, fname, lname } = this.state;
      this.setState({
        users,
        email: '',
        fname: '',
        lname: '',
        everFocusedEmail: false,
        everFocusedLname: false,
        everFocusedFname: false,
        inFocus: '',
        submit:false
      });
      localStorage.setItem('users', JSON.stringify(this.state.users));
    }
    return false;
  }

  canBeSubmitted() {
    const errors = validate(this.state.email, this.state.fname, this.state.lname, this.state.submit);
    const isDisabled = Object.keys(errors).some(x => errors[x]);
   return !isDisabled;
  }
  render() {
    const errors = validate(this.state.email, this.state.fname, this.state.lname, this.state.submit);
    const isDisabled = Object.keys(errors).some(x => errors[x]);
    return (
        <div className="col-xs-12">
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input
              className={errors.fname ? "error" : ""}
              type="text"
              placeholder="Enter fname"
              value={this.state.fname}
              onChange={this.handleFnameChange.bind(this)}
          />
          <input
              className={errors.lname ? "error" : ""}
              type="text"
              placeholder="Enter lname"
              value={this.state.lname}
              onChange={this.handleLnameChange.bind(this)}
          />
          <input
              className={errors.email ? "error" : ""}
              type="text"
              placeholder="Enter email"
              value={this.state.email}
              onChange={this.handleEmailChange.bind(this)}
          />
          <input type="submit" value="Add User"/>
        </form>
        <div className="col-xs-12">
          <h3>user list</h3>
          <ul className="list-group">{
            this.state.users.map(function (user) {
              return <li className="list-group-item" key={user.fname}>{user.fname} {user.lname} {user.email} </li>
            })
          }
          </ul>
            </div>
          </div>
    );
  }
}

function validate(email, fname, lname, flag) {
  // true means invalid, so our conditions got reversed
  return {
    email: email.length === 0 && flag,
    fname: fname.length === 0 && flag,
    lname: lname.length === 0 && flag,
  };
}
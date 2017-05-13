import React, { Component } from 'react';

import Header from 'components/header';
import LeftPanel from 'components/leftpanel';

export default class About extends Component {
    constructor(props){
      super(props);
      this.state = {
          users:[
              {
                  fname: 'john',
                  lname: 'doe',
                  email: 'john@gmail.com'
              },
              {
                  fname: 'kim',
                  lname: 'john',
                  email: 'kim@gmail.com'
              },
              {
                  fname: 'billie',
                  lname: 'john',
                  email: 'billie@gmail.com'
              }
          ]
      }
        localStorage.setItem('users', JSON.stringify(this.state.users));
    }
  render() {
    const { children } = this.props; // eslint-disable-line

    return (
        <div className="container-fluid">
            <div className="wrapper-inside">
              <Header />
              <div className="col-xs-12 content">
                  <LeftPanel />
                  <div className="col-xs-12 col-sm-10">
                    {children}
                  </div>
              </div>
            </div>
        </div>
    );
  }
}

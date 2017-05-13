import React, { Component } from 'react';
import { Link } from 'react-router';

export default class About extends Component {

    render() {
        return (
        <div className="col-xs-12 col-sm-2 left-panel">
            <div className="panel panel-default">
                <div className="panel-heading">Category1</div>
                <div className="panel-body"><Link to='/createUser'>creteUser</Link></div>
            </div>
            <div className="panel panel-default">
                <div className="panel-heading">Category2</div>
                <div className="panel-body"><Link to='/updateUser'>editUser</Link></div>
            </div>
        </div>
        )
    }

}


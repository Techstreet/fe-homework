
import React from 'react'
import { Link } from 'react-router';


const Header = () => (
    <div className="header">
        <div className="header-left pull-left">
            <h3>UserData</h3>
        </div>
        <div className="col-xs-8">
                <div className="form-group" id="adv-search">
                    <input type="text" className="form-control" />
                        <div className="search"><span className="glyphicon glyphicon-search"
                                                      aria-hidden="true"></span></div>
            </div>
        </div>
        <div className="header-right pull-left">
            <div className="header-right-text  pull-right">
                <Link to='/logout'>Logout</Link>
            </div>

        </div>
    </div>
)

export default Header

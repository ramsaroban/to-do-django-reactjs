import React from 'react';
import HERE_logo from './HERE_logo.png';
import { Link } from 'react-router-dom';

import './Header.css'
class Header extends React.Component {
    state = {}
    render() {
        return (
            <div className="ui fixed inverted borderless huge menu">

                <div className="ui container grid">

                    <div className="computer only row">
                        <Link to='/' className="header item">
                            <img src={HERE_logo} alt='HERE'>
                            </img>
                        </Link>
                        <Link to='/' className="active item"><h1>#TodoApp</h1></Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;
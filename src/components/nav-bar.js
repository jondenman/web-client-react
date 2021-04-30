import React from 'react';
import {Link} from 'react-router-dom';
import './nav-bar.css';

const NavBar = () =>
    <div className="row sticky-top jd-sticky-nav-bar">
        <ul className="nav nav-pills col-12">
            <div className = "col-1">
            </div>
            <li className="nav-item">
                <Link className="nav-link" to={`/`}>
                    Home
                </Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to={`/software`}>
                    Software
                </Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to={`/music`}>
                    Music
                </Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to={`/contact`}>
                    Contact
                </Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to={`/about`}>
                    About
                </Link>
            </li>
        </ul>
    </div>

export default NavBar

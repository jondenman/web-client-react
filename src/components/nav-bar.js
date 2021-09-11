import React from 'react';
import {Link} from 'react-router-dom';
import './nav-bar.css';

const NavBar = () =>
    <div className="row sticky-top jd-sticky-nav-bar">
        <ul className="nav nav-pills col-6 col-sm-12">
            {/*<div className = "col-1">*/}
            {/*</div>*/}
            <li className="nav-item">
                <Link className="nav-link" onClick={() => {
                    const anchor = document.querySelector('#home')
                    anchor.scrollIntoView({ behavior: 'smooth', block: 'start' })
                }}>
                    Home
                </Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" onClick={() => {
                    const anchor = document.querySelector('#about')
                    anchor.scrollIntoView({ behavior: 'smooth', block: 'start' })
                }}>
                    About
                </Link>
            </li>
            <li className="nav-item">
                {/*<Link className="nav-link" to={`/software`}>*/}
                {/*    Software*/}
                {/*</Link>*/}
                <Link className="nav-link" onClick={() => {
                    const anchor = document.querySelector('#software')
                    anchor.scrollIntoView({ behavior: 'smooth', block: 'start' })
                }}>
                    Software
                </Link>

            </li>
            {/*<li className="nav-item">*/}
            {/*    <Link className="nav-link" to={`/music`}>*/}
            {/*        Music*/}
            {/*    </Link>*/}
            {/*</li>*/}
            <li className="nav-item">
                <Link className="nav-link" onClick={() => {
                    const anchor = document.querySelector('#contact')
                    anchor.scrollIntoView({ behavior: 'smooth', block: 'start' })
                }}>
                    Contact
                </Link>
            </li>

        </ul>
    </div>

export default NavBar

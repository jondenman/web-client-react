import React from 'react';
import './home.css';
import ProjectCard from "./project-card";
//import {Link} from 'react-router-dom';

const Home = () =>
    <div className={"fill-window flex"} id={'home'}>
        <div className={"d-flex justify-content-lg-center p-5 p-sm-0"}>
            <h1>Oh hey! I'm <strong>Jon Denman</strong>, <br/> a software developer with a background in music.</h1>
        </div>
        <button className={"button"} onClick={() => {
            const anchor = document.querySelector('#about')
            anchor.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }}>
            Take a look &nbsp;
            <i className="fa fa-arrow-circle-down"></i>
        </button>
    </div>

export default Home
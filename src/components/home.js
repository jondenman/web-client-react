import React from 'react';
import './home.css';
import ProjectCard from "./project-card";
//import {Link} from 'react-router-dom';

const Home = () =>
    <div className={"fill-window flex"} id={'home'}>
        <h1 className={"justify-content-lg-center"}>Oh hey! I'm <strong>Jon Denman</strong>, a software developer</h1>
        <h1> with a background in music.</h1>
        <button className={"button"} onClick={() => {
            const anchor = document.querySelector('#about')
            anchor.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }}>
            Take a look &nbsp;
            <i className="fa fa-arrow-circle-down"></i>
        </button>
    </div>

export default Home
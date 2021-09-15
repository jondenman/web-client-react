import React from 'react';
import ProjectCard from "./project-card";
import SkillCard from "./skill-card";
import "./about.css";

const About = () =>
    <div id={'about'}>
        <br/>
        <br/>
        <h1>About</h1>
        <div className={"row justify-content-center"}>
            <div className={"col-8"}>
                <SkillCard title={"Who am I?"}
                           description={"A software engineer with an electronic music production background"}
                           imageSrc={"https://media-exp1.licdn.com/dms/image/C4E03AQHu3NpTKhjFxg/profile-displayphoto-shrink_400_400/0/1539376123582?e=1636588800&v=beta&t=F_Nev2H0qAJjdkAM2prUsqObVeH0zgJ7KNtUOasopeg"}/>
            </div>
        </div>
        {/*<h2>Core Languages</h2>*/}
        <div className={"card-deck container-fluid"}>
            <SkillCard title={"Java"}
                       imageSrc={"https://www.shareicon.net/data/2016/09/23/833700_windows_512x512.png"}
                       //description={"Java programming with a focus on object oriented design"}
                       altText={"Java Logo"}/>
            <SkillCard title={"Python"}
                       imageSrc={"https://cdn-icons-png.flaticon.com/512/1822/1822899.png"}
                       //description={"Clean code"}
                       altText={"Python Language Logo"}/>
            <SkillCard title={"React/JS"}
                       imageSrc={"https://cdn4.iconfinder.com/data/icons/logos-brands-5/24/react-512.png"}
                //description={"Clean code"}
                       altText={"React Logo"}/>
            <SkillCard title={"C++"}
                       imageSrc={"https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/1200px-ISO_C%2B%2B_Logo.svg.png"}
                //description={"Clean code"}
                       altText={"React Logo"}/>
        </div>


    </div>

export default About
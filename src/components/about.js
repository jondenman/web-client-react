import React from 'react';
import ProjectCard from "./project-card";
import SkillCard from "./skill-card";

const About = () =>
    <div id={'about'}>
        <br/>
        <br/>
        <h1>About</h1>
        <h2>Core Languages</h2>
        <div className={"card-deck"}>
            <SkillCard title={"Java"}
                       imageSrc={"https://1000logos.net/wp-content/uploads/2020/09/Java-Emblem.jpg"}
                       //description={"Java programming with a focus on object oriented design"}
                       altText={"Java Logo"}/>
            <SkillCard title={"Python"}
                       imageSrc={"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/2048px-Python-logo-notext.svg.png"}
                       //description={"Clean code"}
                       altText={"Python Language Logo"}/>
            <SkillCard title={"React/JS"}
                       imageSrc={"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png"}
                //description={"Clean code"}
                       altText={"React Logo"}/>
            <SkillCard title={"C++"}
                       imageSrc={"https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/1200px-ISO_C%2B%2B_Logo.svg.png"}
                //description={"Clean code"}
                       altText={"React Logo"}/>
        </div>
        <div className={"row justify-content-center"}>
            <div className={"col-4"}>
                <SkillCard title={"Who am I?"}
                           description={"I am a software engineer with a electronic music production background"}
                           imageSrc={"https://media-exp1.licdn.com/dms/image/C4E03AQHu3NpTKhjFxg/profile-displayphoto-shrink_400_400/0/1539376123582?e=1636588800&v=beta&t=F_Nev2H0qAJjdkAM2prUsqObVeH0zgJ7KNtUOasopeg"}/>
            </div>
        </div>

    </div>

export default About
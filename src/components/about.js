import React from 'react';
import ProjectCard from "./project-card";
import SkillCard from "./skill-card";
import r_logo from '../logos/r_studio.png'
import "./about.css";
import HeadshotCard from "./headshot-card";

const About = () =>
    <div id={'about'}>
        <br/>
        <br/>
        <h2>About</h2>
        <div className={"row justify-content-center"}>
            <div className={"col-4"}>
                <HeadshotCard title={"Who am I?"}
                           description={"A software engineer with an electronic music production background"}
                           imageSrc={"https://media-exp1.licdn.com/dms/image/C4E03AQHu3NpTKhjFxg/profile-displayphoto-shrink_400_400/0/1539376123582?e=1636588800&v=beta&t=F_Nev2H0qAJjdkAM2prUsqObVeH0zgJ7KNtUOasopeg"}/>
            </div>
        </div>
        {/*<h2>Core Languages</h2>*/}
        <div className={"row row-cols-4"}>
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
            <SkillCard title={"MySQL"}
                       imageSrc={"https://icon-library.com/images/mysql-icon/mysql-icon-3.jpg"}
                       altText={"MySQL logo"}/>
            <SkillCard title={"MongoDB"}
                       imageSrc={"https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2,f_auto,g_center,q_auto:good/v1/gcs/platform-data-mongodb/events/mon.png"}
                       altText={"MongoDB logo"}/>
            <SkillCard title={"AWS"}
                       imageSrc={"https://ps.w.org/amazon-polly/assets/icon-256x256.png?rev=2183954"}
                       altText={"AWS logo"}/>
            <SkillCard title={"R"}
                       imageSrc={r_logo}
                       altText={"AWS logo"}/>

        </div>


    </div>

export default About
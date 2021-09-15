import React from 'react';
import ProjectCard from "./project-card";
import all_ears_png from '../logos/all-ears-homepage.png';
import archDiag from '../diagrams/serverless_diagram.png';
import particle from '../screenshots/particle.png';
import ModalImage from "./modal_image";

const Software = () =>
    <div id={"software"}>
        <br/>
        <br/>
        <h1>Software</h1>
            <div className={"card-deck"}>
                <ProjectCard title={"All Ears Android App"}
                             external={true}
                             imageSrc={all_ears_png}
                             description={"Ear Training app developed for Android"}
                             button={"All Ears Github"}
                             link={"https://github.com/nikhilnair23/AllEars"}/>
                <div className={"card"}>
                    <img className="card-img-top rounded-circle" src={"https://ps.w.org/amazon-polly/assets/icon-256x256.png?rev=2183954"} alt="aws logo"/>
                    <div className="card-body">
                        <h5 className="card-title">
                            Serverless Cloud Solution
                        </h5>
                        <p className="card-text">Architecture for an image processing workflow</p>
                        <ModalImage title={"AWS Serverless Diagram"}
                                    imgSrc={archDiag}
                                    buttonText={"Architecture Diagram"}
                                    text={"Application design that utilizes AWS cloud to architect a solution for an image\n" +
                        "                            processing assembly line. This project leverages AWS Lambda and Amazon Rekognition."}/>
                    </div>
                </div>
                <ProjectCard title={"Particle Simulator"}
                             external={true}
                             imageSrc={particle}
                             description={"Graphics project using OpenGL/C++" + " -"}
                             button={"Youtube demo"}
                             link={"https://www.youtube.com/watch?v=8S3BLrYq4Xk"}/>
                <ProjectCard title={"All Ears Android App"}
                             imageSrc={all_ears_png}
                             description={"Ear Training app developed for Android"}
                             button={"All Ears Github"}
                             link={"https://github.com/nikhilnair23/AllEars"}/>
            </div>
    </div>

export default Software;
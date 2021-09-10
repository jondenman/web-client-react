import React from 'react';
import ProjectCard from "./project-card";

const Software = () =>
    <div>
        <h1>Software</h1>
        <div className={"card-deck"}>
            <ProjectCard title={"All Ears Android App"}
                         imageSrc={"https://logoeps.com/wp-content/uploads/2014/06/38002-android-logo-icon-vector-icon-vector-eps.png"}
                         description={"Ear Training app developed for Android"}
                         button={"All Ears Github"}
                         link={"https://github.com/nikhilnair23/AllEars"}/>
            <ProjectCard title={"AWS Serverless Cloud Solution"}
                         imageSrc={"https://ps.w.org/amazon-polly/assets/icon-256x256.png?rev=2183954"}
                         description={"Application design that utilizes AWS cloud to architect a solution for an image " +
                         "processing assembly line. This project leverages AWS Lambda and Amazon Rekognition."}
                         button={"Architecture Diagram"}
                         link={"/serverless_diagram"}/>
        </div>
    </div>

export default Software;
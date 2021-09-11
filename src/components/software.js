import React from 'react';
import ProjectCard from "./project-card";
import all_ears_png from '../logos/all-ears-homepage.png';
import archDiag from '../diagrams/serverless_diagram.png';
import ModalImage from "./modal_image";

const Software = () =>
    <div>
        <h1>Software</h1>
        <div className={"card-deck"}>
            <ProjectCard title={"All Ears Android App"}
                         imageSrc={all_ears_png}
                         description={"Ear Training app developed for Android"}
                         button={"All Ears Github"}
                         link={"https://github.com/nikhilnair23/AllEars"}/>
            <div className={"card"}>
                <img className="card-img-top rounded-circle" src={"https://ps.w.org/amazon-polly/assets/icon-256x256.png?rev=2183954"} alt="aws logo"/>
                <div className="card-body">
                    <h5 className="card-title">
                        "AWS Serverless Cloud Solution"
                    </h5>
                    <p className="card-text">"Application design that utilizes AWS cloud to architect a solution for an image
                        processing assembly line. This project leverages AWS Lambda and Amazon Rekognition."</p>
                    <ModalImage title={"AWS Serverless Diagram"}
                                imgSrc={archDiag}
                                buttonText={"Architecture Diagram"}/>
                </div>
            </div>



            {/*<div className="card">*/}
            {/*    <img className="card-img-top rounded-circle" src="https://ps.w.org/amazon-polly/assets/icon-256x256.png?rev=2183954" alt="Card image cap"/>*/}
            {/*    <div className="card-body">*/}
            {/*        <h5 className="card-title">*/}
            {/*            "AWS Serverless Cloud Solution"*/}
            {/*        </h5>*/}
            {/*        <p className="card-text">"Application design that utilizes AWS cloud to architect a solution for an image " +*/}
            {/*            "processing assembly line. This project leverages AWS Lambda and Amazon Rekognition."</p>*/}
            {/*        <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#aws_diag">*/}
            {/*            Launch demo modal*/}
            {/*        </button>*/}
            {/*    </div>*/}
            {/*    <ModalImage id={"aws_diag"}*/}
            {/*                imgSrc={archDiag}*/}
            {/*                text={"Architecture Diagram for image processing assembly line"}/>*/}
            {/*</div>*/}
        </div>
    </div>

export default Software;
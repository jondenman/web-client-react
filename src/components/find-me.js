import React from 'react';
import ProjectCard from "./project-card";
import ModalImage from "./modal_image";
import archDiag from "../diagrams/serverless_diagram.png";
import ButtonMailto from "./mail-to-button";
import Contact from "./contact";
import ContactCard from "./contact-card";
import gitlogo from "../logos/GitHub-Mark.png";
import linkinlogo from "../logos/linkedin-icon-vector-21082453.jpg";
import emaillogo from "../logos/email_icon_176616.png";
//import {Link} from 'react-router-dom';

const FindMe = () =>
    <div className={"container-fluid"}>
        <div className={"row d-flex justify-content-center"}>
            <div className={""}>
                <ContactCard title={"My GitHub Page"}
                              imageSrc={gitlogo}
                              description={"My GitHub"}
                              button={"Github"}
                              link={"https://github.com/jondenman"}/>
            </div>
            <div className={""}>
                <ContactCard title={"My LinkedIn Page"}
                             imageSrc={linkinlogo}
                             description={"My LinkedIn"}
                             button={"LinkedIn"}
                             link={"https://www.linkedin.com/in/Jon-Denman/"}/>
            </div>
            <div className={""}>
                <ContactCard title={"My LinkedIn Page"}
                             imageSrc={emaillogo}
                             description={"Email Me"}
                             button={"LinkedIn"}
                             link={"mailto:denmanjonathan@gmail.com"}/>
            </div>


            {/*<div className={"card border-0"}>*/}
            {/*    <img className="card-img-top rounded-circle h-20 w-20" src={} alt="email logo"/>*/}
            {/*    <div className="card-body">*/}
            {/*        <p className="card-text">*/}
            {/*            Email me &nbsp;*/}
            {/*            <i className="fas fa-external-link-alt"></i>*/}
            {/*        </p>*/}
            {/*        <ButtonMailto label={"Compose Email"}*/}
            {/*                      mailto={"mailto:denmanjonathan@gmail.com"}/>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </div>
    </div>

export default FindMe;
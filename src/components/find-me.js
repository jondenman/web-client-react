import React from 'react';
import ProjectCard from "./project-card";
import ModalImage from "./modal_image";
import archDiag from "../diagrams/serverless_diagram.png";
import ButtonMailto from "./mail-to-button";
//import {Link} from 'react-router-dom';

const FindMe = () =>
    <>
        <div class={"card-deck"}>
            <ProjectCard title={"My GitHub Page"}
                         imageSrc={"https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"}
                         description={"Check out my github page to see my latest projects and contributions"}
                         button={"Github"}
                         link={"https://github.com/jondenman"}/>
            <ProjectCard title={"My LinkedIn Page"}
                         imageSrc={"https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/600px-LinkedIn_logo_initials.png"}
                         description={"Find me on LinkedIn"}
                         button={"LinkedIn"}
                         link={"https://www.linkedin.com/in/Jon-Denman/"}/>
            <div className={"card"}>
                <img className="card-img-top rounded-circle" src={"https://cdn.icon-icons.com/icons2/2768/PNG/512/email_icon_176616.png"} alt="email logo"/>
                <div className="card-body">
                    <h5 className="card-title">
                        Send me an email
                    </h5>
                    <p className="card-text">Contact me directly with your default email client</p>
                    <ButtonMailto label={"Compose Email"}
                                  mailto={"mailto:denmanjonathan@gmail.com"}/>
                </div>
            </div>
        </div>

        {/*<h1>Home</h1>*/}
        {/*<h1>Home</h1>*/}
        {/*<h1>Home</h1>*/}
        {/*<h1>Home</h1>*/}
        {/*<h1>Home</h1>*/}
        {/*<h1>Home</h1>*/}
        {/*<h1>Home</h1>*/}

    </>

export default FindMe;
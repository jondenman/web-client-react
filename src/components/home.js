import React from 'react';
import ProjectCard from "./project-card";
//import {Link} from 'react-router-dom';

const Home = () =>
    <>
        <h1>Home</h1>
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
                <ProjectCard title={"My LinkedIn Page"}
                             imageSrc={"logo512.png"}
                             description={"Find me on LinkedIn"}
                             button={"LinkedIn"}
                             link={"https://www.linkedin.com/in/Jon-Denman/"}/>
        </div>

        {/*<h1>Home</h1>*/}
        {/*<h1>Home</h1>*/}
        {/*<h1>Home</h1>*/}
        {/*<h1>Home</h1>*/}
        {/*<h1>Home</h1>*/}
        {/*<h1>Home</h1>*/}
        {/*<h1>Home</h1>*/}
        
    </>

export default Home
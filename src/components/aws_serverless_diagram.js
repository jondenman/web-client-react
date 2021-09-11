import React from 'react';
import {Link} from "react-router-dom";
import serverless_diagram_png from '../diagrams/serverless_diagram.png'
import ModalImage from "./modal_image";

const ServerlessDiagram = () =>
    <div>
        <h1>Serverless Diagram</h1>
        <Link to={"/software"} className="btn btn-primary">
            Back to Software
        </Link>
        <br/>
        <img src={serverless_diagram_png}></img>
    </div>

export default ServerlessDiagram
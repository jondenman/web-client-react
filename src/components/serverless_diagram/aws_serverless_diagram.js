import React from 'react';
import {Link} from "react-router-dom";

const ServerlessDiagram = () =>
    <div>
        <h1>Serverless Diagram</h1>
        <Link to={"/software"} className="btn btn-primary">
            Back to Software
        </Link>
        <br/>
        <img src={"/serverless_diagram.png"}></img>
    </div>

export default ServerlessDiagram
import React, {useState} from 'react'
import {Link} from "react-router-dom";

const ProjectCard = ({title, description, button, link, imageSrc, external}) => {
    // const [external, setExternal] = useState(false)
    // const [newTitle, setNewTitle] = useState(title)

    // const saveTitle = () => {
    //     setEditing(false)
    //     const newCourse = {
    //         ...course,
    //         title: newTitle
    //     }
    //     updateCourse(newCourse)
    // }

    return (
            <div className="card">
                <img className="card-img-top rounded-circle" src={imageSrc} alt="Card image cap"/>
                <div className="card-body">
                    <h5 className="card-title">
                        {title}
                    </h5>
                    <p className="card-text">{description}</p>
                    {
                        external &&
                        <a href={link} className="btn btn-primary">
                            {button} &nbsp;
                            <i className="fas fa-external-link-alt"></i>
                        </a>
                    }
                    {
                        !external &&
                        <a href={link} className="btn btn-primary">
                            {button}
                        </a>
                    }

                </div>
            </div>
    )
}
export default ProjectCard;
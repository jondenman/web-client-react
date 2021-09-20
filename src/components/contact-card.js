import React from 'react'
import './contact-card.css';

const ContactCard = ({title, description, imageSrc, altText, link}) => {

    return (
        <a href={link} target="_blank" rel="noopener noreferrer">
                <img className={"center"}
                     src={imageSrc}
                     alt={altText}
                    // width={100}
                    // height={300}
                />
                {/*<p className="">*/}
                {/*    {description}*/}
                {/*    /!*&nbsp;*!/*/}
                {/*    /!*<i className="fas fa-external-link-alt"></i>*!/*/}
                {/*</p>*/}


        </a>
    )
}
export default ContactCard;
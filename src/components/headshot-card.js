import React from 'react'

const HeadshotCard = ({title, description, imageSrc, altText}) => {

    return (
        <div className="card border-0 align-items-center">
            <img className="card-img-top rounded-circle"
                 src={imageSrc}
                 alt={altText}
                // width={100}
                // height={300}
            />
            <div className="card-body">
                <h5 className="card-title justify-content-center d-none d-md-block">
                    {title}
                </h5>

                <p className="card-text">{description}</p>

            </div>
        </div>
    )
}
export default HeadshotCard;
import React, {useState} from "react";
import Modal from "react-bootstrap/Modal";
import serverless_diagram_png from "../diagrams/serverless_diagram.png";

const ModalImage = ({title, imgSrc, buttonText, text, isVideo, isPDF}) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <a className={"btn btn-primary mt-auto"} variant="primary" onClick={handleShow}>
                {buttonText}
            </a>

            <Modal show={show} onHide={handleClose} size={"lg"}>
                <Modal.Header closeButton>
                    <Modal.Title>{title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {
                        isVideo &&
                        <video loop autoPlay={true} src={imgSrc} type={"videos/mov"}></video>
                    }
                    {
                        !isVideo && !isPDF &&
                        <img src={imgSrc}></img>
                    }
                    {
                        isPDF &&
                        <embed src={imgSrc} type={"application/pdf"} width={700} height={500}/>
                    }
                    <p>{text}</p>
                </Modal.Body>
                <Modal.Footer>
                    <a className={"btn btn-primary"} variant="secondary" onClick={handleClose}>
                        Close
                    </a>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalImage;
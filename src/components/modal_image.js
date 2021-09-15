import React, {useState} from "react";
import Modal from "react-bootstrap/Modal";
import serverless_diagram_png from "../diagrams/serverless_diagram.png";

const ModalImage = ({title, imgSrc, buttonText, text}) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <a className={"btn btn-primary"} variant="primary" onClick={handleShow}>
                {buttonText}
            </a>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <img src={imgSrc}></img>
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
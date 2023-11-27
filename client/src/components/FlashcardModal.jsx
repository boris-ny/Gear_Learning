/* eslint-disable react/prop-types */

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Image from "react-bootstrap/esm/Image";

const FlashcardModal = (props) => {
  return (
    <div
      className="modal show"
      >
      <Modal centered show={props.show}>
        <Modal.Header >
          <Modal.Title>{props.title}</Modal.Title>
        </Modal.Header>
        <Image src={props.Image} />
        <Modal.Body>
          <p>{props.description}</p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="primary" onClick={props.Onhide}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default FlashcardModal;

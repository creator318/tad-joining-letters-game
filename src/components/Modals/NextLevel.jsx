import { Modal, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css"

export default function NextLevel({ showModal, nextLevel }) {
  return (
    <Modal centered show={showModal} className="d-block">
      <Modal.Header closeButton>
        <Modal.Title>Stage Completed</Modal.Title>
      </Modal.Header>
      <Modal.Body className="ms-auto me-auto">
        <Button variant="secondary" onClick={() => nextLevel(false)}>
          Next
        </Button>
      </Modal.Body>
    </Modal>
  );
}

import React from "react";
import { Modal, Button, Table } from "react-bootstrap";
import { prices } from "./prices";
import "../css/Modal.css";

const ModalComponent = ({ modalId, setModalId }) => {
  return (
    <Modal show={!!modalId} onHide={() => setModalId(0)}>
      <Modal.Header closeButton>
        <Modal.Title>{prices[modalId].title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {modalId && (
          <Table striped bordered hover className="modal-table">
            <tbody>
              {prices[modalId].services.map((service, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{service}</td>
                  <td>{prices[modalId].price}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button className="btn-cancel" onClick={() => setModalId(0)}>
          Закрити
        </Button>
        <Button type="btn" className="btn-call" href="tel:+380671035848">
          Замовити
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalComponent;

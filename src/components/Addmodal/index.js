import React from 'react'
import { Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import Form from '../Form';

const AddModal = (props) => {
  const { toggleModalClose, modalTitle, modalBody, madalFotter, isOpen, toggle, initialValues, onSubmit } = props
  return (
    <div>
      <Modal
        isOpen={isOpen}
        toggle={toggle}
      >
        <ModalHeader
          toggle={toggleModalClose}
          close={
            <button className="close" onClick={toggleModalClose}>
              ×
            </button>
          }
          cssModule={{ "modal-title": "w-100 text-center" }}
        >
          <span className="text-center">{modalTitle}</span>
        </ModalHeader>
        <Form initialValues={initialValues}
          enableReinitialize={true}

          onSubmit={onSubmit}>
          <ModalBody className="p-2">
            <div className="mt-2 mb-3">{modalBody}</div>
          </ModalBody>
          <ModalFooter>
            {madalFotter}
          </ModalFooter>
        </Form>

      </Modal>
    </div>
  )
}

export default AddModal
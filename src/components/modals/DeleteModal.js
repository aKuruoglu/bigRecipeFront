import React from 'react';
import PropTypes from 'prop-types';
import { Button, Modal } from 'react-bootstrap';

const DeleteModal = ( {
  entity, open, handleDelete, handleClose,
} ) => (
  <Modal show={ open } onHide={ handleClose }>
    <Modal.Header closeButton>
      <Modal.Title>
        Deleting
        {' '}
        {entity}
      </Modal.Title>
    </Modal.Header>
    <Modal.Body>
      Do you really want to delete the
      {' '}
      {entity}
      ?
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={ handleClose }>
        Cancel
      </Button>
      <Button variant="danger" onClick={ handleDelete }>
        Delete
      </Button>
    </Modal.Footer>
  </Modal>
);

DeleteModal.propTypes = {
  entity: PropTypes.string.isRequired,
  open: PropTypes.bool.isRequired,
  handleDelete: PropTypes.func.isRequired,
  handleClose: PropTypes.func.isRequired,
};

export default DeleteModal;

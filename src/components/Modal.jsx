import React from "react";

const Modal = ({ isOpen, onClose, children, onDelete }) => {
  const handleClose = () => {
    onClose();
  };

  return (
    isOpen && (
      <div
        className="modal fade show"
        tabIndex="-1"
        style={{
          display: `${isOpen ? "block" : ""}`,
          backgroundColor: `${isOpen ? "rgba(0, 0, 0, 0.5)" : "transparent"}`,
        }}
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="d-flex justify-content-end mt-2 mx-3">
              <button
                type="button "
                className="close bg-white "
                onClick={handleClose}
                style={{ border: "none", fontSize: "1.5rem", color: "gray" }}
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">{children}</div>

            <div className="d-flex justify-content-end mb-3 mx-3">
              <button
                type="button"
                className="btn btn-secondary mx-3"
                onClick={handleClose}
              >
                Cancel
              </button>
              <button
                type="button"
                className="btn btn-danger"
                onClick={onDelete}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default Modal;

import React from 'react'


const Modal() {
  return (
    <div className="c-modal-overlay">
        <div className="c-modal">
            <button className="close-button">x</button>
            <div className="c-modal-content">
                <h2>Delete Notes</h2>
                <p>Are you sure you want to delete this note?</p>
                <span className="d-flex justify-content-center">
                    <button className="btn btn-danger me-3">Delete</button>
                    <button className="btn btn-primary">Cancel</button>
                </span>
            </div>
        </div>
    </div>
  )
}

export default Modal
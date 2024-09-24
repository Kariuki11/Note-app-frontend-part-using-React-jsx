import React from 'react'

const Modal() {
  return (
    <div className="c-modal-overlay">
        <div className="c-modal">
            <button className="close-button">x</button>
            <div className="c-modal-content">
                <h2>Delete Notes</h2>
            </div>
        </div>
    </div>
  )
}

export default Modal
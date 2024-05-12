import React from "react";
import { FaTimes, FaDownload } from "react-icons/fa";
import "./styles/ModalStyles.css";

const Modal = ({ media, onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal">
        <button className="close-button" onClick={onClose}>
          <FaTimes />
        </button>
        {media && (
          <>
            <img src={media.links[0].href} alt={media.links[0].title} />
            <div className="download-container">
              <a href={media.links[0].href} download className="download-link">
                <FaDownload /> Download Image
              </a>
            </div>
            <p>{media.data[0].description}</p>
          </>
        )}
      </div>
    </div>
  );
};

export default Modal;

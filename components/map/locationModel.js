import React from 'react';

const LocationModal = ({ location, onClose }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h2>{location.companyName}</h2>
        {/* Add other details as needed */}
      </div>
    </div>
  );
};

export default LocationModal;
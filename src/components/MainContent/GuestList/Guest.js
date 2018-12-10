import React from 'react';
import GuestName from './GuestName';
import PropTypes from 'prop-types';

const Guest = ({ 
    guest, 
    handleConfirmation, 
    handleEdit, 
    changeName, 
    handleRemoveGuest 
}) => (
    <li>
        <GuestName 
            handleNameEdit={e => changeName(e.target.value)} 
            isEditing={guest.isEditing}
        >
            {guest.name}
        </GuestName>
        <label>
            <input 
                onChange={handleConfirmation} 
                type="checkbox" 
                checked={guest.isConfirmed} /> Confirmed
        </label>
        <button onClick={handleEdit}>
        {guest.isEditing ? "Save" : "Edit"}
        </button>
        <button onClick={handleRemoveGuest}>remove</button>
    </li>
)

Guest.propTypes = {
    guest: PropTypes.object.isRequired,
    handleConfirmation: PropTypes.func.isRequired,
    handleEdit: PropTypes.func.isRequired,
    changeName: PropTypes.func.isRequired,
    handleRemoveGuest: PropTypes.func.isRequired
  };

export default Guest
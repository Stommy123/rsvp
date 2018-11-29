import React from 'react';
import GuestName from './GuestName';
import PropTypes from 'prop-types';

const Guest = props => (
    <li>
        <GuestName 
            handleNameEdit={e => props.changeName(e.target.value)} 
            isEditing={props.guest.isEditing}
        >
            {props.guest.name}
        </GuestName>
        <label>
            <input 
                onChange={props.handleConfirmation} 
                type="checkbox" 
                checked={props.guest.isConfirmed} /> Confirmed
        </label>
        <button onClick={props.handleEdit}>
        {props.guest.isEditing ? "Save" : "Edit"}
        </button>
        <button onClick={props.handleRemoveGuest}>remove</button>
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
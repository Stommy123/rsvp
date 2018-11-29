import React from 'react';
import GuestName from './GuestName';

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

export default Guest
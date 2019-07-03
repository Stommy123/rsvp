import React from 'react';
import GuestName from './GuestName';
import PropTypes from 'prop-types';

const Guest = ({
  toggleGuestProperty,
  guest: { name, id, isEditing, isConfirmed } = {},
  changeName,
  handleRemoveGuest
}) => (
  <li>
    <GuestName handleNameEdit={e => changeName(e.target.value)} isEditing={isEditing}>
      {name}
    </GuestName>
    <label>
      <input onChange={_ => toggleGuestProperty('isConfirmed', id)} type="checkbox" checked={isConfirmed} />
      Confirmed
    </label>
    <button onClick={_ => toggleGuestProperty('isEditing', id)}>{isEditing ? 'Save' : 'Edit'}</button>
    <button onClick={handleRemoveGuest}>remove</button>
  </li>
);

Guest.propTypes = {
  guest: PropTypes.object.isRequired,
  handleConfirmation: PropTypes.func.isRequired,
  handleEdit: PropTypes.func.isRequired,
  changeName: PropTypes.func.isRequired,
  handleRemoveGuest: PropTypes.func.isRequired
};

export default Guest;

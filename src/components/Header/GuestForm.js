import React from 'react';
import PropTypes from 'prop-types';

const GuestForm = ({ handleNewGuest, pendingGuest, handleNameInput }) => (
  <form onSubmit={handleNewGuest}>
    <input onChange={handleNameInput} type="text" value={pendingGuest} placeholder="Invite Someone" />
    <button type="submit" name="submit">
      Submit
    </button>
  </form>
);

GuestForm.propTypes = {
  handleNewGuest: PropTypes.func.isRequired,
  pendingGuest: PropTypes.string.isRequired,
  handleNameInput: PropTypes.func.isRequired
};

export default GuestForm;

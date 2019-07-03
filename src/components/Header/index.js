import React from 'react';
import PropTypes from 'prop-types';
import GuestForm from './GuestForm';

const Header = ({ handleNewGuest, pendingGuest, handleNameInput }) => (
  <header>
    <h1>RSVP</h1>
    <GuestForm handleNewGuest={handleNewGuest} handleNameInput={handleNameInput} pendingGuest={pendingGuest} />
  </header>
);

Header.propTypes = {
  handleNewGuest: PropTypes.func.isRequired,
  pendingGuest: PropTypes.string.isRequired,
  handleNameInput: PropTypes.func.isRequired
};

export default Header;

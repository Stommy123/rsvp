import React from 'react'
import PropTypes from 'prop-types';
import GuestForm from './GuestForm'

const Header = props => (
    <header>
        <h1>RSVP</h1>
        <GuestForm
            handleNewGuest={props.handleNewGuest}
            handleNameInput={props.handleNameInput}
            pendingGuest={props.pendingGuest}
        />
    </header>
)

Header.propTypes = {
    handleNewGuest: PropTypes.func.isRequired,
    pendingGuest: PropTypes.string.isRequired,
    handleNameInput: PropTypes.func.isRequired
  };


export default Header
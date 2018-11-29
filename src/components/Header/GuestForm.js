import React from 'react'
import PropTypes from "prop-types";

const GuestForm = props => (
    <form onSubmit={props.handleNewGuest}>
        <input 
            onChange={props.handleNameInput}
            type="text" 
            value={props.pendingGuest}
            placeholder="Invite Someone" 
        />
        <button type="submit" name="submit" >Submit</button>
    </form>
)

GuestForm.propTypes = {
    handleNewGuest: PropTypes.func.isRequired,
    pendingGuest: PropTypes.string.isRequired,
    handleNameInput: PropTypes.func.isRequired
  };

export default GuestForm
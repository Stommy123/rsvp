import React from 'react'
import PropTypes from 'prop-types';

const GuestName = ({ isEditing, handleNameEdit, children }) => (
    isEditing
    ? <input type="text" value={children} onChange={handleNameEdit} />
    : <span> {children} </span>
)

GuestName.propTypes = {
    isEditing: PropTypes.bool.isRequired,
    handleNameEdit: PropTypes.func.isRequired
  };

export default GuestName

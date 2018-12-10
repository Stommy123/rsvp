import React from 'react'
import PropTypes from 'prop-types';

const GuestName = ({ isEditing, handleNameEdit, children }) => {
    if (isEditing) return <input type="text" value={children} onChange={handleNameEdit} />
    return <span> {children} </span>
}

GuestName.propTypes = {
    isEditing: PropTypes.bool.isRequired,
    handleNameEdit: PropTypes.func.isRequired
  };

export default GuestName
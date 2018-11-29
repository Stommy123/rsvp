import React from 'react';
import Guest from './Guest'
import PendingGuest from './PendingGuest'
import PropTypes from 'prop-types'

const GuestList = props => (
    <ul>
        <PendingGuest name={props.pendingGuest} />
        {
            props.guests
            .filter(guest => !props.isFiltered || guest.isConfirmed)
            .map((guest, i) => 
                    <Guest 
                        changeName={text => props.changeName(text, guest.id)} 
                        handleEdit={() => props.toggleEdit(guest.id)} 
                        handleConfirmation={() => props.toggleConfirmation(guest.id)}
                        handleRemoveGuest={() => props.handleRemoveGuest(guest.id)} 
                        guest={guest} 
                        key={i} 
                    />
            )
        }
    </ul>
)

GuestList.propTypes = {
    guests: PropTypes.array.isRequired,
    toggleConfirmation: PropTypes.func.isRequired,
    toggleEdit: PropTypes.func.isRequired,
    changeName: PropTypes.func.isRequired,
    isFiltered: PropTypes.bool.isRequired,
    handleRemoveGuest: PropTypes.func.isRequired,
    pendingGuest: PropTypes.string.isRequired
  };

export default GuestList;
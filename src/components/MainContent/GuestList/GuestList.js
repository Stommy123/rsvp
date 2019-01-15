import React from 'react';
import Guest from './Guest'
import PendingGuest from './PendingGuest'
import PropTypes from 'prop-types'

const GuestList = ({
    guests,
    guestList,
    toggleConfirmation,
    toggleEdit,
    changeName,
    isFiltered,
    handleRemoveGuest,
    pendingGuest
}) => (
    <ul>
        <PendingGuest name={pendingGuest} />
        { guestList.map(guest =>
                            <Guest
                                changeName={text => changeName(text, guest.id)}
                                handleEdit={() => toggleEdit(guest.id)}
                                handleConfirmation={() => toggleConfirmation(guest.id)}
                                handleRemoveGuest={() => handleRemoveGuest(guest.id)}
                                guest={guest}
                                key={guest.id}
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

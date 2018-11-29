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
                            changeName={text => props.changeName(text, i)} 
                            handleEdit={() => props.toggleEdit(i)} 
                            handleConfirmation={() => props.toggleConfirmation(i)}
                            handleRemoveGuest={() => props.handleRemoveGuest(i)} 
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
    toggleEdit: PropTypes.func.isRequired
}

export default GuestList;
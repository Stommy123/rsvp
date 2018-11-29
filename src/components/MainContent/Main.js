import React from 'react'
import Counter from './Counter'
import GuestList from './GuestList/GuestList'
import ConfirmedFilter from './ConfirmedFilter'
import PropTypes from "prop-types";

const Main = props => (
    <div className="main">
        <ConfirmedFilter
            toggleFilter={props.toggleFilter}
            isFiltered={props.isFiltered}
         />
        <Counter
            totalInvited={props.totalInvited}
            attending={props.numberAttending}
            unconfirmed={props.numberUnconfirmed}
        />
        <GuestList 
            isFiltered={props.isFiltered}
            changeName={props.changeName} 
            toggleEdit={props.toggleEdit} 
            toggleConfirmation={props.toggleConfirmation}
            handleRemoveGuest={props.removeGuest} 
            guests={props.guests}
            pendingGuest={props.pendingGuest} 
        />
        </div>
)

Main.propTypes = {
    toggleFilter: PropTypes.func.isRequired,
    isFiltered: PropTypes.bool.isRequired,
    totalInvited: PropTypes.number.isRequired,
    numberAttending: PropTypes.number.isRequired,
    numberUnconfirmed: PropTypes.number.isRequired,
    guests: PropTypes.array.isRequired,
    toggleConfirmation: PropTypes.func.isRequired,
    toggleEdit: PropTypes.func.isRequired,
    changeName: PropTypes.func.isRequired,
    removeGuest: PropTypes.func.isRequired,
    pendingGuest: PropTypes.string.isRequired
  };

export default Main
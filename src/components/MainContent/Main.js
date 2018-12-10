import React from 'react'
import Counter from './Counter'
import GuestList from './GuestList/GuestList'
import ConfirmedFilter from './ConfirmedFilter'
import PropTypes from "prop-types";

const Main = ({
    toggleFilter, 
    isFiltered, 
    totalInvited,
    numberAttending,
    numberUnconfirmed,
    guests,
    toggleConfirmation,
    toggleEdit,
    changeName,
    removeGuest,
    pendingGuest
}) => (
    <div className="main">
        <ConfirmedFilter
            toggleFilter={toggleFilter}
            isFiltered={isFiltered}
        />
        <Counter
            totalInvited={totalInvited}
            attending={numberAttending}
            unconfirmed={numberUnconfirmed}
        />
        <GuestList 
            isFiltered={isFiltered}
            changeName={changeName} 
            toggleEdit={toggleEdit} 
            toggleConfirmation={toggleConfirmation}
            handleRemoveGuest={removeGuest} 
            guests={guests}
            pendingGuest={pendingGuest} 
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
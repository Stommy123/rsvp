import React from 'react'
import Counter from './Counter'
import GuestList from './GuestList'

const Main = props => (
    <div className="main">
        <div>
            <h2>Invitees</h2>
            <label>
                <input 
                    onChange={props.toggleFilter} 
                    checked={props.isFiltered} 
                    type="checkbox" 
                />Hide those who haven't responded
            </label>
        </div>
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

export default Main
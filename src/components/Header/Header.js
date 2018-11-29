import React from 'react'
import GuestForm from '../MainContent/GuestForm'

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



export default Header
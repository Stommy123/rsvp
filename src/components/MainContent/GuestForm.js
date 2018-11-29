import React from 'react'

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

export default GuestForm
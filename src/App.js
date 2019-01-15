import React, { Component } from 'react';
import Header from './components/Header/Header';
import Main from './components/MainContent/Main';
import guestList from './data/guestData';
import './App.css';

class App extends Component {
	state = {
		guests: guestList,
		isFiltered: false,
		pendingGuest: "",
		newGuestID: guestList.length
	}

	getTotalInvited = () => this.state.guests.length

	getAttendingGuests = () => this.state.guests.reduce((total, guest) => guest.isConfirmed ? total + 1 : total, 0)

	toggleGuestProperty = (prop, index) => {
		let { guests } = this.state
		guests = guests.map(guest => index === guest.id ? { ...guest, [prop]: !guest[prop] } : guest)
		this.setState({ guests })
	}

	toggleConfirmation = id =>  this.toggleGuestProperty("isConfirmed", id)

	toggleEdit = id => this.toggleGuestProperty("isEditing", id)

	toggleFilter = () => this.setState({ isFiltered: !this.state.isFiltered })

	handleRemoveGuest = id => this.setState({ guests: this.state.guests.filter(guest => id !== guest.id) })

	handleChangeName = (name, id) => {
		let { guests } = this.state
		guests = guests.map(guest => id === guest.id ? { ...guest, name } : guest)
		this.setState({ guests })
	}

	handleNameInput = e => this.setState({ pendingGuest: e.target.value })

	handleNewGuest = e => {
		e.preventDefault()
		const { guests, pendingGuest, newGuestID } = this.state
		guests.push({
			id: newGuestID,
			name: pendingGuest,
			isConfirmed: false,
			isEditing: false
		})
		this.setState({ guests, pendingGuest: '', newGuestID: newGuestID + 1 })
	}

  	render() {
		const totalInvited = this.getTotalInvited()
		const numberAttending = this.getAttendingGuests()
		const numberUnconfirmed = totalInvited - numberAttending
		const { guests, isFiltered, pendingGuest } = this.state
		const guestList = guests.reduce((acc, guest) => {
			if ( !isFiltered || guest.isConfirmed) acc.push(guest)
			return acc
		}, [])
		return (
			<div className="App">
				<Header
					handleNewGuest={this.handleNewGuest}
					handleNameInput={this.handleNameInput}
					pendingGuest={pendingGuest}
				/>
				<Main
					toggleFilter={this.toggleFilter}
					isFiltered={isFiltered}
					totalInvited={totalInvited}
					numberAttending={numberAttending}
					numberUnconfirmed={numberUnconfirmed}
					guestList={guestList}
					guests={guests}
					toggleConfirmation={this.toggleConfirmation}
					toggleEdit={this.toggleEdit}
					changeName={this.handleChangeName}
					removeGuest={this.handleRemoveGuest}
					pendingGuest={pendingGuest}
				/>
			</div>
		)
  	}
}

export default App;

import React, { Component } from 'react';
import { Header, Content } from './components';
import guests from './data/guestData';
import './App.css';

class App extends Component {
  state = {
    guests,
    isFiltered: false,
    pendingGuest: String(),
    newGuestID: guestList.length
  };

  getTotalInvited = _ => this.state.guests.length;

  getAttendingGuests = _ => this.state.guests.reduce((total, guest) => (guest.isConfirmed ? total + 1 : total), 0);

  toggleGuestProperty = (prop, index) => {
    const guests = this.state.guests.map(guest => (index === guest.id ? { ...guest, [prop]: !guest[prop] } : guest));
    this.setState({ guests });
  };

  toggleFilter = _ => this.setState({ isFiltered: !this.state.isFiltered });

  handleRemoveGuest = id => this.setState({ guests: this.state.guests.filter(guest => id !== guest.id) });

  handleChangeName = (name, id) => {
    const guests = this.state.guests.map(guest => (id === guest.id ? { ...guest, name } : guest));
    this.setState({ guests });
  };

  handleNameInput = e => this.setState({ pendingGuest: e.target.value });

  handleNewGuest = e => {
    e.preventDefault();
    const { guests, pendingGuest, newGuestID } = this.state;
    guests.push({
      id: newGuestID,
      name: pendingGuest,
      isConfirmed: false,
      isEditing: false
    });
    this.setState({ guests, pendingGuest: String(), newGuestID: newGuestID + 1 });
  };

  render() {
    const totalInvited = this.getTotalInvited();
    const numberAttending = this.getAttendingGuests();
    const numberUnconfirmed = totalInvited - numberAttending;
    const { guests, isFiltered, pendingGuest } = this.state;
    const guestList = guests.reduce((acc, guest) => {
      if (!isFiltered || guest.isConfirmed) acc.push(guest);
      return acc;
    }, []);
    return (
      <div className="App">
        <Header
          handleNewGuest={this.handleNewGuest}
          handleNameInput={this.handleNameInput}
          pendingGuest={pendingGuest}
        />
        <Content
          toggleFilter={this.toggleFilter}
          isFiltered={isFiltered}
          totalInvited={totalInvited}
          numberAttending={numberAttending}
          numberUnconfirmed={numberUnconfirmed}
          guestList={guestList}
          guests={guests}
          toggleGuestProperty={this.toggleGuestProperty}
          changeName={this.handleChangeName}
          removeGuest={this.handleRemoveGuest}
          pendingGuest={pendingGuest}
        />
      </div>
    );
  }
}

export default App;

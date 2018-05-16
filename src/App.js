import React, { Component } from 'react';
import './index.css';
import GuestList from './guestList';
import Counter from './counter';
import Header from "./header";


class App extends Component {
  state = {
    isFiltered: false,
    pendingGuest: '',
    guests: [
      {
        name: 'Treasure',
        isConfirmed: true,
        isEditing: false,
      },
      {
        name: 'Nic',
        isConfirmed: true,
        isEditing: false,
      },
      {
        name: 'koory',
        isConfirmed: true,
        isEditing: true,
      },
    ],
  };

  toggleGuestPropertyAt = (property, indexToChange) =>
    this.setState({
      guests: this.state.guests.map((guest, index) => {
        if (index === indexToChange) {
          return {
            ...guest,

            [property]: !guest[property],
          };
        }
        return guest;
      }),
    });

  toggleConfirmationAt = index =>
    this.toggleGuestPropertyAt('isConfirmed', index);
  removeGuestAt = index =>
    this.setState({
      guests: [
        ...this.state.guests.slice(0, index),
        ...this.state.guests.slice(index + 1),
      ],
    });
  toggleEditingAt = index => this.toggleGuestPropertyAt('isEditing', index);

  setNameAt = (name, indexToChange) =>
    this.setState({
      guests: this.state.guests.map((guest, index) => {
        if (index === indexToChange) {
          return {
            ...guest,

            name,
          };
        }
        return guest;
      }),
    });

  toggleFilter = () => {
    this.setState({ isFiltered: !this.state.isFiltered });
  };
  handleNameInput = e =>
    this.setState({
      pendingGuest: e.target.value,
    });

  newGuestSubmitHandler = e => {
    e.preventDefault();
    this.setState({
      guests: [
        {
          name: this.state.pendingGuest,
          isConfirmed: false,
          isEditing: false,
        },
        ...this.state.guests,
      ],
      pendingGuest: '',
    });
  };

  getTotalInvited = () => this.state.guests.length;

  // My way OF doing it

  //   getConfirmedGuests = () => this.state.guests.filter(guest => guest.isConfirmed).length;
  //   getUnConfirmedGuests = () => this.state.guests.filter(guest => !guest.isConfirmed).length;

  ////////////Guil Way of doing it
  getConfirmedGuests = () =>
    this.state.guests.reduce(
      (total, guest) => (guest.isConfirmed ? total + 1 : total),
      0,
    );

  render() {
    const totalInvited = this.getTotalInvited();
    const totalConfirmed = this.getConfirmedGuests();
    const totalUnConfirmed = totalInvited - totalConfirmed;
    return (
      <div className="App">
        <Header newGuestSubmitHandler={this.newGuestSubmitHandler}
                handleNameInput={this.handleNameInput}
                pendingGuest={this.state.pendingGuest}/>
        <div className="main">
          <div>
            <h2>Invitees</h2>
            <label>
              <input
                type="checkbox"
                onChange={this.toggleFilter}
                checked={this.state.isFiltered}
              />{' '}
              Hide those who haven't responded
            </label>
          </div>
          <Counter
            TotalInvited={totalInvited}
            numberAttending={totalConfirmed}
            numberUnconfirmed={totalUnConfirmed}
          />
          <GuestList
            guests={this.state.guests}
            toggleConfirmationAt={this.toggleConfirmationAt}
            toggleEditingAt={this.toggleEditingAt}
            setNameAt={this.setNameAt}
            isFiltered={this.state.isFiltered}
            removeGuestAt={this.removeGuestAt}
            pendingGuest={this.state.pendingGuest}
          />
        </div>
      </div>
    );
  }
}

export default App;

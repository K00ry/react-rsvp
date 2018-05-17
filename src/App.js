import React, { Component } from 'react';
import './index.css';
import Header from './Header/index';
import MainContent from './MainContent/index';

class App extends Component {
  state = {
    isFiltered: false,
    pendingGuest: '',
    guests: [],
  };

  toggleGuestPropertyAt = (property, rightGuest) =>
    this.setState({
      guests: this.state.guests.map( guest => {
        if (guest.id === rightGuest) {
          return {
            ...guest,

            [property]: !guest[property],
          };
        }
        return guest;
      }),
    });

  toggleConfirmationAt = rightGuest =>
    this.toggleGuestPropertyAt('isConfirmed', rightGuest);
  removeGuestAt = rightGuest =>
    this.setState({
      guests: this.state.guests.filter(guest => rightGuest !== guest.id)
    });
  toggleEditingAt = rightGuest => this.toggleGuestPropertyAt('isEditing', rightGuest);

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
          id:this.state.pendingGuest,
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
        <Header
          newGuestSubmitHandler={this.newGuestSubmitHandler}
          handleNameInput={this.handleNameInput}
          pendingGuest={this.state.pendingGuest}
        />

        <MainContent
          guests={this.state.guests}
          toggleFilter={this.toggleFilter}
          isFiltered={this.state.isFiltered}
          TotalInvited={totalInvited}
          numberAttending={totalConfirmed}
          numberUnconfirmed={totalUnConfirmed}
          isConfirmed={this.state.isConfirmed}
          pendingGuest={this.state.pendingGuest}
          removeGuestAt={this.removeGuestAt}
          setNameAt={this.setNameAt}
          toggleConfirmationAt={this.toggleConfirmationAt}
          toggleEditingAt={this.toggleEditingAt}
        />
      </div>
    );
  }
}

export default App;

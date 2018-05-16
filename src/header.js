import React from 'react';
import PropTypes from 'prop-types';
import GuestInputForm from './guestInputForm';

const Header = props =>
    <header>
        <h1>RSVP</h1>
        <p>A Treehouse App</p>
        <GuestInputForm guestSubmit={props.newGuestSubmitHandler}
                        nameInput={props.handleNameInput}
                        pendGuest={props.pendingGuest}/>
    </header>


Header.propTypes= {
    newGuestSubmitHandler: PropTypes.func.isRequired,
    handleNameInput: PropTypes.func.isRequired,
    pendingGuest: PropTypes.string.isRequired,



};






    export default Header;
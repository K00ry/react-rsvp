import React from 'react';
import PropTypes from 'prop-types';


const GuestInputForm = props =>
    <form onSubmit={props.guestSubmit}>
        <input
            type="text"
            onChange={props.nameInput}
            value={props.pendGuest}
            placeholder="Invite Someone"
        />
        <button type="submit" name="submit" value="submit">
            Submit
        </button>
    </form>


GuestInputForm.propTypes= {
    guestSubmit:PropTypes.func.isRequired,
    nameInput: PropTypes.func.isRequired,
    pendGuest : PropTypes.string.isRequired,
    
};






    export default GuestInputForm;
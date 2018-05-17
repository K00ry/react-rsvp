import React from 'react';
import PropTypes from 'prop-types';

const Counter = props =>

    <table className="counter">
        <tbody>
        <tr>
            <td>Attending:</td>
            <td>{props.numberAttendingAt}</td>
        </tr>
        <tr>
            <td>Unconfirmed:</td>
            <td>{props.numberUnconfirmedAt}</td>
        </tr>
        <tr>
            <td>Total:</td>
            <td> {props.TotalInvitedAt}</td>
        </tr>
        </tbody>
    </table>

Counter.propTypes = {
    TotalInvitedAt : PropTypes.number,
    numberAttendingAt :PropTypes.number,
    numberUnconfirmedAt :PropTypes.number,


};



export default Counter;
import React from 'react';
import PropTypes from 'prop-types';
import ConfirmedFilter from './confirmedFilter';
import Counter from './counter';
import GuestList from './guestList/index';

const MainContent = props => (
  <div className="main">
    <ConfirmedFilter
      toggleFilterAt={props.toggleFilter}
      isFilteredAt={props.isFiltered}
    />
    <Counter
      TotalInvitedAt={props.TotalInvited}
      numberAttendingAt={props.numberAttending}
      numberUnconfirmedAt={props.numberUnconfirmed}
    />

    <GuestList
      guests={props.guests}
      toggleConfirmationAt={props.toggleConfirmationAt}
      toggleEditingAt={props.toggleEditingAt}
      setNameAt={props.setNameAt}
      isFiltered={props.isFiltered}
      removeGuestAt={props.removeGuestAt}
      pendingGuest={props.pendingGuest}
    />
  </div>
);

MainContent.propTypes = {
  guests: PropTypes.array.isRequired,
  toggleFilter: PropTypes.func.isRequired,
  toggleConfirmationAt: PropTypes.func.isRequired,
  toggleEditingAt: PropTypes.func.isRequired,
  isFiltered: PropTypes.bool.isRequired,
  setNameAt: PropTypes.func.isRequired,
  removeGuestAt: PropTypes.func.isRequired,
  pendingGuest: PropTypes.string.isRequired,
  TotalInvited: PropTypes.number,
  numberAttending: PropTypes.number,
  numberUnconfirmed: PropTypes.number,
};

export default MainContent;

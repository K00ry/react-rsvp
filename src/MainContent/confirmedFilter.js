import React from 'react';
import PropTypes from 'prop-types';


const ConfirmedFilter = props =>


        <div>
            <h2>Invitees</h2>
            <label>
                <input
                    type="checkbox"
                    onChange={props.toggleFilterAt}
                    checked={props.isFilteredAt}
                />{' '}
                Hide those who haven't responded
            </label>
        </div>





ConfirmedFilter.propsTypes={
    toggleFilterAt: PropTypes.func.isRequired,
    isFilteredAt: PropTypes.bool.isRequired

}





    export default ConfirmedFilter;
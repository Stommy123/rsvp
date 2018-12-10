import React from 'react';
import PropTypes from 'prop-types';

const Counter = ({ attending, unconfirmed, totalInvited }) => (
    <table className="counter">
        <tbody>
            <tr>
                <td>Attending:</td>
                <td>{attending}</td>
            </tr>
            <tr>
                <td>Unconfirmed:</td>
                <td>{unconfirmed}</td>
            </tr>
            <tr>
                <td>Total:</td>
                <td>{totalInvited}</td>
            </tr>
        </tbody>
    </table>
)

Counter.propTypes = {
    attending: PropTypes.number,
    unconfirmed: PropTypes.number,
    totalInvited: PropTypes.number
  };

export default Counter
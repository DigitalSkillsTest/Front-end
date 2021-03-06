import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import Countdown from 'react-countdown-now';
import * as routes from '../../routes/path';

class CountDownTimer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { timer, currentCounter } = this.props;
    const renderer = ({
      hours, minutes, seconds, completed,
    }) => {
      if (completed) {
        // Render a completed state
        currentCounter(hours, minutes, seconds);
        localStorage.removeItem('attribute');
        return <Redirect to={routes.Timeout} />;
      }
      return (
        <h3>
          {currentCounter(hours, minutes, seconds)}
          {hours}
          :
          {minutes}
          :
          {seconds}
        </h3>
      );
    };
    return (
      <div>
        {
          timer && (
            <Countdown
              date={timer}
              renderer={renderer}
            />
          )
        }
      </div>
    );
  }
}

export default CountDownTimer;

CountDownTimer.propTypes = {
  timer: PropTypes.number.isRequired,
  currentCounter: PropTypes.func.isRequired,
};

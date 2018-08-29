import React, { Component } from 'react';
import moment from 'moment';
import { Redirect } from 'react-router-dom';
import Countdown from 'react-countdown-now';
import * as routes from '../../routes/path';

class CountDownTimer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timer: null,
    };
    this.sendTimeToServer = this.sendTimeToServer.bind(this);
  }

  componentDidMount() {
    const { time } = this.props;
    this.setState({
      timer: time,
    });
  }

  sendTimeToServer(hours, minutes, seconds) {
    console.log('s', moment.duration({ seconds, minutes, hours }).as('milliseconds'));
  }

  render() {
    const { timer } = this.state;
    const renderer = ({
      hours, minutes, seconds, completed,
    }) => {
      if (completed) {
        // Render a completed state
        console.log('s', moment.duration({ seconds, minutes, hours }).as('milliseconds'));
        return <Redirect to={routes.TestFinish} />;
      }
      return (
        <span>
          {seconds === '00' && this.sendTimeToServer(hours, minutes, seconds)}
          {this.props.currentCounter(hours, minutes, seconds)}
          {hours}
          :
          {minutes}
          :
          {seconds}
        </span>
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

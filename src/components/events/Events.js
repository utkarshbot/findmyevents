import React, { Component } from 'react';
import Event from './Event';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getEvents } from '../../actions/eventAction';

class Events extends Component {

  componentDidMount() {
    this.props.getEvents();
  }

  render() {
    const { events } = this.props;
    return (
      <React.Fragment>
        <h1 className="display-4 mb-3">
         <span className="text-primary">Events</span> List
        </h1>
        {events.map(event => (
          <Event key={event.id} event={event} />
        ))}
      </React.Fragment>
    );
  }
}
Events.propTypes = {
  events: PropTypes.array.isRequired,
  getEvents: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  events: state.event.events
});


export default connect(mapStateToProps, { getEvents })(Events);

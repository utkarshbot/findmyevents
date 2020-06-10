import React, { Component } from 'react';
import TextInputGroup from '../layout/TextInputGroup';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getEvent, updateEvent } from '../../actions/eventAction';

class EditEvent extends Component {
  state = {
    name: '',
    venue: '',
    date: '',
    time:'',
    description:'',
    errors: {}
  };

  componentWillReceiveProps(nextProps, nextState) {
    const { name, venue, date, time, description } = nextProps.event;
    this.setState({
      name,
      venue,
      date,
      time,
      description
    })
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.getEvent(id);
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { name, venue, date, time, description } = this.state;

    // Check For Errors
    if (name === '') {
      this.setState({ errors: { name: 'Name is required' } });
      return;
    }

    if (venue === '') {
      this.setState({ errors: { venue: 'Venue is required' } });
      return;
    }

    if (date === '') {
      this.setState({ errors: { date: 'Date is required' } });
      return;
    }
    
    if (time === '') {
      this.setState({ errors: { time: 'Time is required' } });
      return;
    }
    if (description === '') {
      this.setState({ errors: { description: 'Description is required' } });
      return;
    }

    
    const { id } = this.props.match.params;

    const updEvent = {
      id,
      name,
      venue,
      date,
      time,
      description
    };

    this.props.updateEvent(updEvent);

    // Clear State
    this.setState({
      name: '',
      venue: '',
      date: '',
      time:'',
      description: '',
      errors: {}
    });

    this.props.history.push('/');
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { name, venue, date, time, description, errors } = this.state;

    return (
      <div className ="container1">
      <div className="form-wrapper mb-3 bg-dark">
        <div className="card-header bg-primary text-white">Edit Event</div>
        <div className="card-body">
          <form onSubmit={this.onSubmit}><span className="text-white lead">
          <TextInputGroup
              label="Event Name"
              name="name"
              placeholder="Enter Name"
              value={name}
              onChange={this.onChange}
              error={errors.name}
            />
            <TextInputGroup
              label="Venue"
              name="venue"
              placeholder="Enter Venue"
              value={venue}
              onChange={this.onChange}
              error={errors.venue}
            />
            <table className="table text-white">
            <th scope='col'>
            <TextInputGroup
              label="Date"
              name="date"
              type="date"
              placeholder="date placeholder"
              value={date}
              onChange={this.onChange}
              error={errors.date}
            />
            </th>
            <th scope='col'>
            <TextInputGroup
              label="Time"
              name="time"
              type="time"
              placeholder="time placeholder"
              value={time}
              onChange={this.onChange}
              error={errors.time}
            />
            </th>
            </table>
            <TextInputGroup
              label="Description"
              name="description"
              placeholder="Enter Description"
              value={description}
              onChange={this.onChange}
              error={errors.description}
            />
            </span>
            <input
              type="submit"
              value="Update Event"
              className="btn btn-primary btn-block"
            />
          </form>
        </div>
      </div>
      </div>
    );
  }
}

EditEvent.propTypes = {
  event: PropTypes.object.isRequired,
  getEvent: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  event: state.event.event
})

export default connect(mapStateToProps, { getEvent, updateEvent })(EditEvent);

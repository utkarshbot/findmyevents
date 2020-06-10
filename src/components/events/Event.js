import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteEvent } from '../../actions/eventAction';

class Event extends Component {
  state = {
    showEventInfo: false
  };

  onDeleteClick = id => {
    this.props.deleteEvent(id);
  };

  render() {
    const { id, name, venue, date, time, description  } = this.props.event;
    const { showEventInfo } = this.state;

    return (
      <div className="card card-body mb-3 bg-light">
        <h4>
          <span className = 'text-warning'>{name}</span>{' '}
          <i
            onClick={() =>
              this.setState({
                showEventInfo: !this.state.showEventInfo
              })
            }
            className="fas fa-sort-down"
            style={{ cursor: 'pointer',color:'black' }}
          />
          <i
            className="fas fa-trash-alt"
            style={{ cursor: 'pointer', float: 'right', color: 'dark' }}
            onClick={this.onDeleteClick.bind(this, id)}
          />
          <Link to={`event/edit/${id}`}>
            <i
              className="fas fa-pen"
              style={{
                cursor: 'pointer',
                float: 'right',
                color: '#374246',
                marginRight: '1rem'
              }}
            />
          </Link>
        </h4>
        {showEventInfo ? (
          <ul className="list-group">
            <li className="list-group-item"><span className = 'text-warning'>Venue:</span> {venue}</li>
            <li className="list-group-item"><span className = 'text-warning'>Date:</span>  {date}</li>
            <li className="list-group-item"><span className = 'text-warning'>Time:</span>  {time}</li>
            <li className="list-group-item"><span className = 'text-warning'>Description:</span>  {description}</li>
          </ul>
        ) : null}
      </div>
    );
  }
}

Event.propTypes = {
  event: PropTypes.object.isRequired,
  deleteEvent: PropTypes.func.isRequired
};

export default connect(null,{ deleteEvent })(Event);

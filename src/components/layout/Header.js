import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Header = props => {
  const { branding } = props;
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-3 py-0 container2">
      <div className="container">
        <a href="/" className="navbar-brand">
          {branding}
        </a>
        <div>
          <ul className="navbar-nav mr-auto text-uppercase navbar-fixed-top">
            <li className="nav-item">
              <Link to="/" className="nav-link text-white">
              Home  <i className="fas fa-home" /> 
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/event/add" className="nav-link text-white">
                Add  <i className="fas fa-plus" /> 
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link text-white">
                about <i className="fas fa-users" /> 
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

Header.defaultProps = {
  branding: 'My App'
};

Header.propTypes = {
  branding: PropTypes.string.isRequired
};

export default Header;

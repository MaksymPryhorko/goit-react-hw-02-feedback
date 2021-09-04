import React from 'react';
import PropTypes from 'prop-types';

export default function Notification({ message }) {
  return <span className="textMessage">{message}</span>;
}

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

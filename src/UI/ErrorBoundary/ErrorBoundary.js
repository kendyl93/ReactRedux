import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Alien from './Alien.png';

class ErrorBoundary extends PureComponent {
  state = { error: undefined };

  componentDidCatch(error) {
    this.setState({ error });
  }

  render() {
    const { error } = this.state;
    const { children } = this.props;

    if (error) {
      return (
        <div>
          <img src={Alien} alt="Alien" />
          <h3>Something went wrong.</h3>
        </div>
      );
    }

    return children;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.node.isRequired
};

export default ErrorBoundary;

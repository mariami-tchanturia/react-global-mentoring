import React from 'react';
import PropTypes from 'prop-types';

import styles from './Counter.module.scss';

const Button = ({ handleClick, name, type }) =>
  React.createElement('button', { onClick: handleClick, type: type }, name);

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: this.props.initialValue,
    };
  }

  handleIncrement = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  handleDecrement = () => {
    this.setState({
      count: this.state.count - 1,
    });
  };

  render() {
    return React.createElement(
      'div',
      { className: styles.counter },
      React.createElement(
        'h1',
        { className: styles.counter__title },
        'Counter Component'
      ),
      React.createElement(
        'div',
        { className: styles.counter__data },
        React.createElement(
          Button,
          {
            handleClick: this.handleDecrement,
            name: 'Decrement',
            type: 'button',
          },
          null
        ),
        React.createElement(
          'h2',
          { className: styles.counter__value },
          this.state.count
        ),
        React.createElement(
          Button,
          {
            handleClick: this.handleIncrement,
            name: 'Increment',
            type: 'button',
          },
          null
        )
      )
    );
  }
}

Button.propTypes = {
  handleClick: PropTypes.func,
  name: PropTypes.string,
  type: PropTypes.string,
};

Counter.propTypes = {
  initialValue: PropTypes.number,
};

Counter.defaultProps = {
  initialValue: 0,
};

export default Counter;

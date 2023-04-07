import React, { createElement } from 'react';
import PropTypes from 'prop-types';

import styles from './Counter.module.scss';

const Button = ({ handleClick, name, type }) =>
  createElement('button', { onClick: handleClick, type: type }, name);

export class Counter extends React.Component {
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
    return createElement(
      'div',
      { className: styles.counter },
      createElement(
        'h1',
        { className: styles.counter__title },
        'Counter Component'
      ),
      createElement('div', { className: styles.counter__data }, [
        createElement(
          Button,
          {
            handleClick: this.handleDecrement,
            name: 'Decrement',
            type: 'button',
            key: '1',
          },
          null
        ),
        createElement(
          'h2',
          { className: styles.counter__value, key: '2' },
          this.state.count
        ),
        createElement(
          Button,
          {
            handleClick: this.handleIncrement,
            name: 'Increment',
            type: 'button',
            key: '3',
          },
          null
        ),
      ])
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

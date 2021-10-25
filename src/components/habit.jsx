import React, { PureComponent } from 'react';

class Habit extends PureComponent {
  componentDidMount() { // UI상 보여질 때
    console.log(`habit: ${this.props.habit.name} mounted`);
  }

  componentWillUnmount() { // UI상 지우질 때
    console.log(`habit: ${this.props.habit.name} will unmounted`);
  }

  handleIncreament = () => {
    this.props.onIncreament(this.props.habit);
  };

  handleDecreament = () => {
    this.props.onDecreament(this.props.habit);
  };

  handleDelete = () => {
    this.props.onDelete(this.props.habit);

  };

  render() {
    const { name, count } = this.props.habit;
    return (
      <>
        <li className="habit">
          <span className="habit-name">{name}</span>
          <span className="habit-count">{count}</span>
          <button
            className="habit-button habit-increase"
            onClick={this.handleIncreament}
          >
            <i className="fas fa-plus"></i>
          </button>
          <button
            className="habit-button habit-decrease"
            onClick={this.handleDecreament}
          >
            <i className="fas fa-minus"></i>
          </button>
          <button
            className="habit-button habit-delete"
            onClick={this.handleDelete}
          >
            <i className="fas fa-trash"></i>
          </button>
        </li>
      </>
    );
  }
}

export default Habit;
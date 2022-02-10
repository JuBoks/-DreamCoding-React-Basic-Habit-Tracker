import React, {PureComponent} from 'react';

class Habit extends PureComponent {
    handleIncrease = (evt) => {
        this.props.handleIncrease(this.props.habit);
    };

    handleDecrease = (evt) => {
        this.props.handleDecrease(this.props.habit);
    };

    handleDelete = (evt) => {
        this.props.handleDelete(this.props.habit);
    };

    render() {
        console.log("Habit")
        return (
            <li className="habit">
                <span className="habit-name">{this.props.habit.name}</span>
                <span className="habit-count">{this.props.habit.count}</span>
                <button className="habit-button habit-increase" onClick={this.handleIncrease}>
                    <i className="fas fa-plus-square"></i>
                </button>
                <button className="habit-button habit-decrease" onClick={this.handleDecrease}>
                    <i className="fas fa-minus-square"></i>
                </button>
                <button className="habit-button habit-delete" onClick={this.handleDelete}>
                    <i className="fas fa-trash"></i>
                </button>
            </li>
        );
    }
}

export default Habit;
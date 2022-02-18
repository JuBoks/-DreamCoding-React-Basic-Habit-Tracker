import React, {memo} from 'react';

const Habit = memo((props) => {
    console.log("Habit");
    const handleIncrease = (evt) => {
        props.handleIncrease(props.habit);
    };

    const handleDecrease = (evt) => {
        props.handleDecrease(props.habit);
    };

    const handleDelete = (evt) => {
        props.handleDelete(props.habit);
    };

    return (
        <li className="habit">
            <span className="habit-name">{props.habit.name}</span>
            <span className="habit-count">{props.habit.count}</span>
            <button className="habit-button habit-increase" onClick={handleIncrease}>
                <i className="fas fa-plus-square"></i>
            </button>
            <button className="habit-button habit-decrease" onClick={handleDecrease}>
                <i className="fas fa-minus-square"></i>
            </button>
            <button className="habit-button habit-delete" onClick={handleDelete}>
                <i className="fas fa-trash"></i>
            </button>
        </li>
    );
});

export default Habit;
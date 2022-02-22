import React, {memo} from 'react';
import Habit from "./habit";
import HabitAddForm from "./habitAddForm";

const Habits = memo((props) => {
    return (
        <div>
            <HabitAddForm
                handleAdd={props.handleAdd}
            />
            <ul>
                {
                    props.habits.map( habit =>
                        <Habit
                            key={habit.id}
                            habit={habit}
                            handleIncrease={props.handleIncrease}
                            handleDecrease={props.handleDecrease}
                            handleDelete={props.handleDelete}
                        />
                    )
                }
            </ul>
            <button className="habit-reset" onClick={props.handleReset}>Reset</button>
        </div>
    );
});

export default Habits;
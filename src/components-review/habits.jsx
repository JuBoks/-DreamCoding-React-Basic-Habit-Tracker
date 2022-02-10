import React, {PureComponent} from 'react';
import Habit from "./habit";
import HabitAddForm from "./habitAddForm";

class Habits extends PureComponent {
    render() {
        console.log("Habits");
        return (
            <div>
                <HabitAddForm
                    handleAdd={this.props.handleAdd}
                />
                <ul>
                    {
                        this.props.habits.map( habit =>
                            <Habit
                                key={habit.id}
                                habit={habit}
                                handleIncrease={this.props.handleIncrease}
                                handleDecrease={this.props.handleDecrease}
                                handleDelete={this.props.handleDelete}
                            />
                        )
                    }
                </ul>
                <button className="habit-reset" onClick={this.props.handleReset}>Reset</button>
            </div>
        );
    }
}

export default Habits;
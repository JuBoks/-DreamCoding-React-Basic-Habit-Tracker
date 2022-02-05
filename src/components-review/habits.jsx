import React, {Component} from 'react';
import Habit from "./habit";

class Habits extends Component {
    render() {
        return (
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
        );
    }
}

export default Habits;
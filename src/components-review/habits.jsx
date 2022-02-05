import React, {Component} from 'react';
import Habit from "./habit";

class Habits extends Component {
    state = {
        habits: [
            {name: "Reading", count: 0},
        ],
    };

    handleIncrease = (habit) => {
        const habits = this.state.habits.map(el => {
           if (el.id === habit.id) {
               return {...habit, count: habit.count + 1};
           } else {
               return el;
           }
        });

        this.setState({ habits });
    };

    handleDecrease = (habit) => {
        const habits = this.state.habits.map(el => {
            if (el.id === habit.id) {
                return {...habit, count: habit.count == 0 ? 0 : habit.count - 1};
            } else {
                return el;
            }
        });

        this.setState({ habits });
    };

    handleDelete = (habit) => {
        const habits = this.state.habits.filter(el => {
            return el.id !== habit.id;
        });

        this.setState({ habits })
    };


    render() {
        return (
            <ul>
                {
                    this.state.habits.map( habit =>
                        <Habit
                            key={this.state.habits.length}
                            habit={habit}
                            handleIncrease={this.handleIncrease}
                            handleDecrease={this.handleDecrease}
                            handleDelete={this.handleDelete}
                        />

                    )
                }
            </ul>
        );
    }
}

export default Habits;
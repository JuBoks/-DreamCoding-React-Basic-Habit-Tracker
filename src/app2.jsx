import React, {Component} from 'react';
import NavBar from "./components-review/navBar";
import Habits from "./components-review/habits";


class App2 extends Component {
    state = {
        habits: [
            {id: 0, name: "Reading", count: 0},
        ],
    };

    handleAdd = (name) => {
        const habits = [...this.state.habits, { id: this.state.habits.length, name, count: 0 }];
        this.setState({ habits });
    }

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
        console.log('delete', this.state.habits);
        const habits = this.state.habits.filter(el => {
            return el.id !== habit.id;
        });

        this.setState({ habits })
    };

    handleReset = () => {
        const habits = this.state.habits.map(habit => {
            return {...habit, count: 0};
        });
        this.setState({ habits });
    }

    render() {
        return (
            <div>
                <NavBar
                    count={this.state.habits.filter(habit => habit.count > 0).length}
                />
                <Habits
                    habits={this.state.habits}
                    handleIncrease={this.handleIncrease}
                    handleDecrease={this.handleDecrease}
                    handleDelete={this.handleDelete}
                    handleAdd={this.handleAdd}
                    handleReset={this.handleReset}
                />
            </div>
        );
    }
}

export default App2;
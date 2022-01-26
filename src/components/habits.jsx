import React, {Component} from 'react';
import Habit from "./habit";

class Habits extends Component {
    state = {
        habits: [
            {id: 0, name: "Example", count: 0}
        ],
    }

    handleIncrement = (habit) => {
        // state 를 바로 수정하는 것은 좋지 않다.
        // 이렇게 바로 state 의 참조값을 넘겨 받는 것과 마찬가지이므로 사용X
        // let arr = this.state.habits;
        // Spread Operator 를 사용하여 객체의 아이템을 복사한다. (참조값 복사는 아님)
        const habits = [...this.state.habits];

        // 1. index를 통해 값을 수정 (좋지 않은 코드)
        // const index = habits.indexOf(habit);
        // habits[index].count++;

        // 내가 한 방식
        habits.find((el) => {
            if (el.id === habit.id) {
                el.count += 1;
            }
        });

        // 원래라면 { habits : habits } 이지만, 키와 밸류가 같으므로 생략됨
        this.setState({ habits });

    };
    handleDecrement = (habit) => {
        const habits = [...this.state.habits];
        habits.find((el) => {
            if (el.id === habit.id) {
                let count = el.count - 1;
                el.count = count < 0 ? 0 : count;
            }
        });
        this.setState({ habits });
    };
    handleDelete = (habit) => {
        let habits = this.state.habits.filter(el => {
            return el.id !== habit.id
        });

        this.setState({ habits });
    };
    handleAdd = (evt) => {
        const $habitName = document.getElementById('habit-name');
        let habits = [...this.state.habits];
        habits.push({
            id: habits.length,
            name: $habitName.value,
            count: 0
        });
        $habitName.value = '';
        this.setState({ habits });
    };
    handleReset = () => {
        this.setState({habits: []})
    };

    render() {
        return (
            <>
                <nav>
                    <i className="fas fa-leaf"></i>
                    <span className='habit'>Habit Tracker</span>
                    <span className='habit-count'>{this.state.habits.length}</span>
                </nav>
                <div className='habit-input-container'>
                    <input className='habit-name-input' id='habit-name' placeholder='Type Habit Name'/>
                    <button className='habit-add' onClick={this.handleAdd}>Add</button>
                </div>
                <ul>
                    {
                        this.state.habits.map(habit =>
                            <Habit
                                key={habit.id}
                                habit={habit}
                                onIncrement = {this.handleIncrement}
                                onDecrement = {this.handleDecrement}
                                onDelete = {this.handleDelete}
                            />
                        )
                    }
                </ul>
                <button className='habit-reset' onClick={this.handleReset}>Reset All</button>
            </>
        );
    }
}

export default Habits;
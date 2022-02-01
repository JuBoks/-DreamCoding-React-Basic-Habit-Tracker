import React, {Component} from 'react';
import Habit from "./habit";
import HabitAddForm from "./habitAddForm";

/**
 * Habits 는 Habit 컴포넌트를 담은 배열같은 컴포넌트이며,
 * App 에서 props 로 레퍼런스가 변경된 habits 컴포넌트를 전달해주므로..
 * PureComponent 로 바꾸는 것은 불필요하다. (아마도)
 */
class Habits extends Component {
    render() {
        console.log('Habits');
        return (
            <div>
                <HabitAddForm onAdd={this.props.onAdd} />
                <ul>
                    {
                        this.props.habits.map(habit =>
                            <Habit
                                key={habit.id}
                                habit={habit}
                                onIncrement={this.props.onIncrement}
                                onDecrement={this.props.onDecrement}
                                onDelete={this.props.onDelete}
                            />
                        )
                    }
                </ul>
                <button className='habit-reset' onClick={this.props.onReset}>Reset All</button>
            </div>
        );
    }
}

export default Habits;
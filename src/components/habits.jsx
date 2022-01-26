import React, {Component} from 'react';
import Habit from "./habit";

class Habits extends Component {
    render() {
        return (
            <>
                <div className='habit-input-container'>
                    <input className='habit-name-input' id='habit-name' placeholder='Type Habit Name'/>
                    <button className='habit-add' onClick={this.props.onAdd}>Add</button>
                </div>
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
            </>
        );
    }
}

export default Habits;
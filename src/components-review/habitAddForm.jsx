import React, {Component} from 'react';

class HabitAddForm extends Component {

    handleAdd = (evt) => {
        evt.preventDefault();
    }

    render() {
        return (
            <form>
                <input className="habit-name-input" placeholder="Add Your Habit!" />
                <button className="habit-add" onClick={this.handleAdd}>Add</button>
            </form>
        );
    }
}

export default HabitAddForm;
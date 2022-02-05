import React, {Component, createRef} from 'react';

class HabitAddForm extends Component {
    inputRef = createRef();
    formRef = createRef();

    handleAdd = (evt) => {
        evt.preventDefault();
        const name = this.inputRef.current.value;
        name && this.props.handleAdd(name);
        this.formRef.current.reset();
    }

    render() {
        return (
            <form ref={this.formRef}>
                <input ref={this.inputRef} className="habit-name-input" placeholder="Add Your Habit!" />
                <button className="habit-add" onClick={this.handleAdd}>Add</button>
            </form>
        );
    }
}

export default HabitAddForm;
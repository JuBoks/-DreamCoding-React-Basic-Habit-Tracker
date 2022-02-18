import React, {memo} from 'react';

const HabitAddForm = memo(props => {
    console.log("HabitAddForm");
    const inputRef = React.createRef();
    const formRef = React.createRef();

    const handleAdd = (evt) => {
        evt.preventDefault();
        const name = inputRef.current.value;
        name && props.handleAdd(name);
        formRef.current.reset();
    }

    return (
        <form ref={formRef}>
            <input ref={inputRef} className="habit-name-input" placeholder="Add Your Habit!" />
            <button className="habit-add" onClick={handleAdd}>Add</button>
        </form>
    );
});

export default HabitAddForm;
import React, {PureComponent} from 'react';

class HabitAddForm extends PureComponent {
    inputRef = React.createRef();
    formRef = React.createRef();

    handleSubmit = (evt) => {
        evt.preventDefault();
        const value = this.inputRef.current.value;
        // value 가 있으면,
        value && this.props.onAdd(value);
        // 1. input 초기화
        // this.inputRef.current.value = '';
        // 2. form 을 초기화 해줌 (정석)
        this.formRef.current.reset();
    }

    render() {
        console.log('HabitAddForm');
        return (
            <form ref={this.formRef} className='habit-input-container' onSubmit={this.handleSubmit}>
                <input ref={this.inputRef} className='habit-name-input' id='habit-name' placeholder='Type Habit Name'/>
                <button className='habit-add'>Add</button>
            </form>
        );
    }
}

export default HabitAddForm;
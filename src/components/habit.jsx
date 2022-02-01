import React, {PureComponent} from 'react';

class Habit extends PureComponent {
    handleIncrement = (evt) => {
        // state 오프젝트 안에 있는 count 를 증가한 뒤
        // state 를 업데이트 해야 함 (이를 위해 this.setState() 를 호출 하는것)
        // this.setState({count: this.state.count + 1});
        this.props.onIncrement(this.props.habit);
    };
    handleDecrement = (evt) => {
        // const count = this.state.count - 1;
        // this.setState({count: count > 0 ? count : 0});
        this.props.onDecrement(this.props.habit);
    };
    handleDelete = (evt) => {
        this.props.onDelete(this.props.habit);

    };

    render() {
        console.log('Habit');
        const {name, count} = this.props.habit;
        return (
            <li className="habit">
                <span className="habit-name">{name}</span>
                <span className="habit-count">{count}</span>
                <button className="habit-button habit-increase" onClick={this.handleIncrement}>
                    <i className="fas fa-plus-square"></i>
                </button>
                <button className="habit-button habit-decrease" onClick={this.handleDecrement}>
                    <i className="fas fa-minus-square"></i>
                </button>
                <button className="habit-button habit-delete" onClick={this.handleDelete}>
                    <i className="fas fa-trash"></i>
                </button>
            </li>
        )

    }
}

export default Habit;
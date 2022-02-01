import './app.css';
import Habits from "./components/habits";
import React, {Component} from "react";
import NavBar from "./components/navBar";

class App extends Component {
  state = {
    habits: [
      {id: 0, name: "Example", count: 0}
    ],
  };

  handleIncrement = (habit) => {
    // state 를 바로 수정하는 것은 좋지 않다.
    // 이렇게 바로 state 의 참조값을 넘겨 받는 것과 마찬가지이므로 사용X
    // let arr = this.state.habits;
    // Spread Operator 를 사용하여 객체의 아이템을 복사한다. (참조값 복사는 아님)
    // const habits = [...this.state.habits];

    // 1. index를 통해 값을 수정 (좋지 않은 코드)
    // 객체에 직접 접근하게 되면서 값만 변경됨
    // 우선 Data 가 변경되는 경우라면, 변경된 Data로 새로운 Object 를 만들어서 리턴 하는 것이 좋다.
    // const index = habits.indexOf(habit);
    // habits[index].count++;

    // 2. map 을 통해 for 문을 돌면서, data 가 변경된 값으로 새 객체를 만들어서 전달
    const habits = this.state.habits.map(el => {
      if (el.id === habit.id) {
        // habit 객체의 내용들을 복사해오되, count 는 해당 내용으로 오버라이딩 함
        return {...habit, count: habit.count + 1};
      } else {
        return el;
      }
    });
    // 원래라면 { habits : habits } 이지만, 키와 밸류가 같으므로 생략됨
    this.setState({ habits });
  };

  handleDecrement = (habit) => {
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
    let habits = this.state.habits.filter(el => {
      return el.id !== habit.id
    });
    this.setState({ habits });
  };

  handleAdd = (name) => {
    const habits = [...this.state.habits, {id: this.state.habits.length, name, count: 0}];
    this.setState({ habits });
  };

  handleReset = (evt) => {
    const habits = this.state.habits.map(el => {
      // 전부를 리셋하는 것 보다는 필요한 것만 리셋하는 것이 더 나을 수 있다
      // return {...el, count: 0};
      if (el.count !== 0) {
        return {...el, count: 0};
      } else {
        return el;
      }
    });
    this.setState({ habits })
  };

  render() {
    console.log('App');
    return (
        <>
          <NavBar habitCount={this.state.habits.filter( habit => habit.count > 0).length} />
          <Habits
              habits={this.state.habits}
              onIncrement={this.handleIncrement}
              onDecrement={this.handleDecrement}
              onDelete={this.handleDelete}
              onAdd={this.handleAdd}
              onReset={this.handleReset}
          />
        </>
    );
  }

}

export default App;

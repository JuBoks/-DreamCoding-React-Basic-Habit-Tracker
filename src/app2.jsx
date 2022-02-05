import React, {Component} from 'react';
import NavBar from "./components-review/navBar";
import HabitAddForm from "./components-review/habitAddForm";
import Habits from "./components-review/habits";

class App2 extends Component {
    render() {
        return (
            <div>
                <NavBar />
                <HabitAddForm />
                <Habits />
            </div>
        );
    }
}

export default App2;
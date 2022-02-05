import React, {Component} from 'react';

class NavBar extends Component {
    render() {
        return (
            <nav className="navBar">
                <i className="navbar-logo fas fa-leaf"></i>
                <span className="habit">Habit Tracker</span>
                <span className="habit-count">3</span>
            </nav>
        );
    }
}

export default NavBar;
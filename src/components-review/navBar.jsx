import React, {PureComponent} from 'react';

class NavBar extends PureComponent {
    render() {
        console.log("NavBar");
        return (
            <nav className="navBar">
                <i className="navbar-logo fas fa-leaf"></i>
                <span className="habit">Habit Tracker</span>
                <span className="habit-count">{this.props.count}</span>
            </nav>
        );
    }
}

export default NavBar;
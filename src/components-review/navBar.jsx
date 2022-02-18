import React, {memo} from 'react';

const NavBar = memo(props => {
    console.log("NavBar");
    return (
        <nav className="navBar">
            <i className="navbar-logo fas fa-leaf"></i>
            <span className="habit">Habit Tracker</span>
            <span className="habit-count">{props.count}</span>
        </nav>
    );
});

export default NavBar;
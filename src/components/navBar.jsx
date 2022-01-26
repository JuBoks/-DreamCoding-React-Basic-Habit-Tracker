import React, {Component} from 'react';

class NavBar extends Component {
    render() {
        return (
            <nav className='navbar'>
                <i className="navbar-logo fas fa-leaf"></i>
                <span className='habit'>Habit Tracker</span>
                <span className='habit-count'>{this.props.habitCount}</span>
            </nav>
        );
    }
}

export default NavBar;
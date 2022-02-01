import React, {PureComponent} from 'react';

class NavBar extends PureComponent {
    render() {
        console.log('NavBar');
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
import React from 'react';


const Header = () => {
    return (
        <header className='header'>
        <nav>
            <div className="logo">
            <img alt="todoist"/>
            </div>
            <div className='settings'>
            <ul>
                <li>+</li>
                <li>Pizza Slice !</li>
            </ul>

            </div>
        </nav>

        </header>

    )
}

export default Header;
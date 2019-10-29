import React from 'react'

function Header() {
    return (
        <header style={ headerStyle }>
            <h1>Todo List</h1>
        </header>
    )
}

const headerStyle = {
    backgroundColor: "#222",
    color: 'white',
    padding: '20px'
}

export default Header;

import React from 'react'
import PropTypes from 'prop-types'

class TodoItem extends React.Component {
    getStyle = () => {
        return {
            background: '#f4f4f4',
            padding: '5px',
            borderBottom: '1px solid #cccccc',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none',
            padding: '10px',
            paddingLeft: '20px',
            textAlign: 'left'
        }
    }

    render() {
        const { id, title } = this.props.todo
        return (
            <div style={ this.getStyle() }>
                <input type="checkbox" onChange={ this.props.markComplete.bind(this, id) } style={{ marginRight: '20px' }}/>
                { title }
                <button onClick={ this.props.delTodo.bind(this, id) } style={ btnStyle }>x</button>
            </div>
        )
    }
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}

const btnStyle = {
    background: '#ff0000',
    color: '#fff',
    border: 'none',
    padding: '5px, 9px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right'
}

export default TodoItem

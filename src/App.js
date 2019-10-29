import React from 'react';
import './App.css';

import Header from './components/layout/Header.js'
import AddTodo from './components/AddTodo.js'
import Todos from './components/Todos.js'

class App extends React.Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'Kill TWO cats',
        completed: false
      },
      {
        id: 2,
        title: 'Eat breadcrumbs off the bottom of my shoes',
        completed: false
      },
      {
        id: 3,
        title: 'Daily Kahoot session with the bros',
        completed: false
      }
    ]
  }

  markComplete = (id) => {
    this.setState({ todos: this.state.todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo
    })})
  }

  delTodo = (id) => {
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] })
  }

  render() {
    return (
      <div className="app">
      <Header />
      <AddTodo />
      <Todos todos={ this.state.todos } markComplete = { this.markComplete } delTodo={ this.delTodo }/>
      </div>
    );
  }
}

export default App;

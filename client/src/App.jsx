import React, { Component } from 'react'
import TodoList from './TodoList'
import TodoAdd from './TodoAdd'

class App extends Component {
  render() {
    return (
      <div>
        <TodoAdd />
        <TodoList />
      </div>
    )
  }
}

export default App

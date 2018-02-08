import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import { TODO_QUERY } from './TodoList'

class TodoAdd extends Component {
  handleKeyUp = evt => {
    if (evt.keyCode === 13) {
      evt.persist()
      this.props
        .mutate({
          variables: { text: evt.target.value },
          refetchQueries: [{ query: TODO_QUERY }]
        })
        .then(res => {
          evt.target.value = ''
        })
    }
  }

  render() {
    return <input type="text" placeholder="New Todo" onKeyUp={this.handleKeyUp} />
  }
}

const addTodoMutation = gql`
  mutation addTodo($text: String!) {
    addTodo(text: $text) {
      id
      text
    }
  }
`

export default graphql(addTodoMutation)(TodoAdd)

const todos = [
  {
    id: 1,
    text: 'Learn GraphQL'
  },
  {
    id: 2,
    text: 'Planning'
  }
]

let nextId = 3

export const resolvers = {
  Query: {
    todos: () => {
      return todos
    }
  },
  Mutation: {
    addTodo: (root, args) => {
      const newTodo = { id: nextId++, text: args.text }
      todos.push(newTodo)
      return newTodo
    }
  }
}

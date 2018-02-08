import { makeExecutableSchema, addMockFunctionsToSchema } from 'graphql-tools'
import { resolvers } from './resolvers'

const typeDefs = `
  type Todo {
    id: ID!
    text: String
  }
  
  type Query {
    todos: [Todo]
  }

  type Mutation {
    addTodo(text: String!): Todo
  }
  `

const schema = makeExecutableSchema({ typeDefs, resolvers })
export { schema }

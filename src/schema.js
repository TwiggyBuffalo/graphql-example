// Imports: GraphQL
var ApolloServer = require('apollo-server-express').ApolloServer
// Imports: GraphQL TypeDefs & Resolvers
var TYPEDEFS = require('./types.js')
var RESOLVERS = require('./resolvers.js')
// GraphQL: Schema
var SERVER = new ApolloServer({
  typeDefs: TYPEDEFS,
  resolvers: RESOLVERS,
  playground: {
    endpoint: `http://localhost:4000/graphql`,
    settings: {
      'editor.theme': 'light'
    }
  }
});
// Exports
module.exports = SERVER;
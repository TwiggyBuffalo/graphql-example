// Imports: Express
var express = require('express')
var APP = express();
// Imports: GraphQL
var SERVER = require('./schema.js')
// Middleware: GraphQL
SERVER.applyMiddleware({
  app: APP
});
// Express: Port
var PORT = 4000 || process.env;
// Express: Listener
APP.listen(PORT, () => {
  console.log(`The server has started on port: ${PORT}`);
  console.log(`http://localhost:${PORT}/graphql`);
});
// Exports
module.exports = APP
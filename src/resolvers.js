var axios = require('axios')
// GraphQL: Resolvers
  const RESOLVERS = {
    Query: {
    test_query: (parent, args) => {
      return axios.get(`www.apiurl.com/people`)
      .then((response) => response.data)
      .catch((error) => console.log(error))
    }
  }
};
// Exports
module.exports = RESOLVERS;
const rootResolver = require('../src/graphql/resolvers/rootResolver')
const schema = require('../src/graphql/schemas/rootSchema')

module.exports = {
  graphiql:true,
  schema,
  rootValue:rootResolver
}

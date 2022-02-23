const { GraphQLObjectType, GraphQLString, GraphQLID } = require('graphql')

const CartType = new GraphQLObjectType({
  name:'Card',
  fields: () => ({
    id: { type: GraphQLID },
  })
})

module.exports = CartType

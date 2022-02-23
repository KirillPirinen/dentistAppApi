const { GraphQLObjectType, GraphQLID, GraphQLString } = require('graphql')

const TypesType = new GraphQLObjectType({
  name:'Types',
  fields: () => ({
    id: { type: GraphQLID },
    title: { type: GraphQLString },
  })
})

module.exports = TypesType

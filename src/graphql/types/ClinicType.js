const { GraphQLObjectType, GraphQLID, GraphQLString } = require('graphql')

const ClinicType = new GraphQLObjectType({
  name:'Clinic',
  fields: () => ({
    id: { type: GraphQLID },
    title: { type: GraphQLString },
    address: { type: GraphQLString }
  })
})

module.exports = ClinicType

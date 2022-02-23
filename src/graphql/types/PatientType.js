const { GraphQLObjectType, GraphQLString, GraphQLID } = require('graphql')

const PatientType = new GraphQLObjectType({
  name:'Patient',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    lname: { type: GraphQLString },
    phone: { type: GraphQLString },
    avatar: { type: GraphQLString },
  })
})

module.exports = PatientType

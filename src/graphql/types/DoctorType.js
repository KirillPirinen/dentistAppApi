const { GraphQLObjectType, GraphQLString, GraphQLID } = require('graphql')

const DoctorType = new GraphQLObjectType({
  name:'Doctor',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    lname: { type: GraphQLString },
    specialization: { type: GraphQLString },
  })
})

module.exports = DoctorType

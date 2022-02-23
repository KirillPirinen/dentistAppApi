const { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLSchema } = require('graphql')

const CustomerMetaType = new GraphQLObjectType({
  name: 'CustomerMeta',
  fields: () => ({
    id: { type: GraphQLID },
  })
})

const CustomerType = new GraphQLObjectType({
  name: 'Customer',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    CustomerMeta: { type: CustomerMetaType}
  })
})

const StatusType = new GraphQLObjectType({
  name: 'Status',
  fields: () => ({
    id: { type: GraphQLID },
    status: { type: GraphQLString }
  })
})

const OrderType = new GraphQLObjectType({
  name:'Order',
  fields: () => ({
    id: { type: GraphQLID },
    Status: { 
      type: StatusType,
    },
    Customer: {
      type: CustomerType,
    }
  })
})

module.exports = {
  CustomerType,
  OrderType,
  StatusType
}

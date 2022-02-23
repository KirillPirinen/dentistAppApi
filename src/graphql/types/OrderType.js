const OrderType = new GraphQLObjectType({
  name:'Order',
  fields: () => ({
    id: { type: GraphQLID },
    Status: { 
      type: StatusType,
      resolve: (parent) => parent.Status
    },
    Customer: {
      type: CustomerType,
      resolve: (parent) => parent.Customer,
    }
  })
})

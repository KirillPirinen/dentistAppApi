const { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLSchema } = require('graphql')
const { Status, Order } = require("../../../db/models")
const graphiqlToSequelize = require('../../helpers/parse-graphql-meta')
const { OrderType, StatusType } = require('../types')

const Query = new GraphQLObjectType({
  name:'Query',
  fields: {
    status: { type: StatusType, args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return Status.findByPk(args.id)
      }
    },
    order: {
      type: OrderType,
      args: { id: { type: GraphQLID } },
      async resolve(parent, args, context, info) {
        return await Order.findByPk(args.id, { ...graphiqlToSequelize(info.fieldNodes[0]) })
      }
    }
  }
})

module.exports = new GraphQLSchema({
  query:Query
})

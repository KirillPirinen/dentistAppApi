module.exports = `

  type Order {
    id:ID
    status: Status
  }

  input OrderInput {
    status_id: Int!
  }

  type Status {
    id:ID
    status: String
  }

  input StatusInput {
    status: String!
  }

  type Query {
    getAllStatuses:[Status]
    getAllOrders:[Order]
    getStatus(id: ID):Status
    getOrder(id: ID):Status
  }

  type Mutation {
    createStatus(input: StatusInput):Status
    createOrder(input: OrderInput):Order
  }
  
`

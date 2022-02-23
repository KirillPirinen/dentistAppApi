const { Status } = require("../../../db/models")

module.exports = {
  getAllStatuses: async (first, second, third, fourth) => {
    console.log(second)
    return await Status.findAll()
  },
  getStatus: async ({id}) => await Status.findByPk(id),
  createStatus: async({input:{status}}) => await Status.create({status})
}

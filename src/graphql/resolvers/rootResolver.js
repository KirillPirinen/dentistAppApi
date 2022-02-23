const orderResolver = require('./orderResolver')
const statusResolver = require('./statusResolver')

module.exports = {
  ...statusResolver,
  ...orderResolver
}

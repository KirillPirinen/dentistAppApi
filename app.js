const express = require('express')
const { graphqlHTTP } = require('express-graphql')
const cors = require('cors')
const graphqlConfig = require('./config/graphql')
const corsConfig = require('./config/cors')
const { SERVER_PORT } = process.env

const PORT = SERVER_PORT ?? 3000
const app = express()

app.use(cors(corsConfig))
app.use('/graphql', graphqlHTTP(graphqlConfig))

app.listen(PORT, () => console.log(`Server has been started on port ${PORT}`))

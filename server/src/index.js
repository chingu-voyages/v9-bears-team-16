const { GraphQLServer } = require('graphql-yoga')
const { prisma } = require('./generated/prisma-client')
const { resolvers } = require('./resolvers')
const typeDefs = './src/schema.graphql'

/*

To update schema and resolvers:

define types in ./schema.graphql

 update datamodel in ./prisma/datamodel.prisma with updated schema

updates resolver functions in ./resolver.js

 */
const port = process.env.PORT || 4000


const server = new GraphQLServer({
  typeDefs,
  port,
  resolvers,
  context: {
    prisma
  }
})

server.start(() => console.log(`Server is running on http://localhost:${port}`))

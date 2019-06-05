import { GraphQLServer } from 'graphql-yoga'
import { prisma } from '../prisma/prisma-client'

import * as Query from './resolvers/Query'
import * as Mutation from './resolvers/Mutation'
import * as Space from './resolvers/Space'
import * as Food from './resolvers/Food'
import * as StoredFood from './resolvers/StoredFood'
import * as Recipe from './resolvers/Recipe'
import * as Ingredient from './resolvers/Ingredient'

const resolvers = {
  Query,
  Mutation,
  Space,
  Food,
  StoredFood,
  Recipe,
  Ingredient,
}

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
  context: request => ({ ...request, prisma }),
})

server.start(() =>
  console.log(`🔥 Server is running on http://localhost:4000 🔥`)
)

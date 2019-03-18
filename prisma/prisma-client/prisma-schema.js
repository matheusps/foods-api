module.exports = {
        typeDefs: // Code generated by Prisma (prisma@1.28.5). DO NOT EDIT.
  // Please don't change this file manually but run `prisma generate` to update it.
  // For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

/* GraphQL */ `type AggregateFood {
  count: Int!
}

type BatchPayload {
  count: Long!
}

type Food {
  id: ID!
  name: String!
}

type FoodConnection {
  pageInfo: PageInfo!
  edges: [FoodEdge]!
  aggregate: AggregateFood!
}

input FoodCreateInput {
  name: String!
}

type FoodEdge {
  node: Food!
  cursor: String!
}

enum FoodOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type FoodPreviousValues {
  id: ID!
  name: String!
}

type FoodSubscriptionPayload {
  mutation: MutationType!
  node: Food
  updatedFields: [String!]
  previousValues: FoodPreviousValues
}

input FoodSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: FoodWhereInput
  AND: [FoodSubscriptionWhereInput!]
  OR: [FoodSubscriptionWhereInput!]
  NOT: [FoodSubscriptionWhereInput!]
}

input FoodUpdateInput {
  name: String
}

input FoodUpdateManyMutationInput {
  name: String
}

input FoodWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  AND: [FoodWhereInput!]
  OR: [FoodWhereInput!]
  NOT: [FoodWhereInput!]
}

input FoodWhereUniqueInput {
  id: ID
}

scalar Long

type Mutation {
  createFood(data: FoodCreateInput!): Food!
  updateFood(data: FoodUpdateInput!, where: FoodWhereUniqueInput!): Food
  updateManyFoods(data: FoodUpdateManyMutationInput!, where: FoodWhereInput): BatchPayload!
  upsertFood(where: FoodWhereUniqueInput!, create: FoodCreateInput!, update: FoodUpdateInput!): Food!
  deleteFood(where: FoodWhereUniqueInput!): Food
  deleteManyFoods(where: FoodWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Query {
  food(where: FoodWhereUniqueInput!): Food
  foods(where: FoodWhereInput, orderBy: FoodOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Food]!
  foodsConnection(where: FoodWhereInput, orderBy: FoodOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): FoodConnection!
  node(id: ID!): Node
}

type Subscription {
  food(where: FoodSubscriptionWhereInput): FoodSubscriptionPayload
}
`
      }
    
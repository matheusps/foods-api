module.exports = {
        typeDefs: /* GraphQL */ `type AggregateFood {
  count: Int!
}

type AggregateSpace {
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

input FoodCreateManyInput {
  create: [FoodCreateInput!]
  connect: [FoodWhereUniqueInput!]
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

input FoodScalarWhereInput {
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
  AND: [FoodScalarWhereInput!]
  OR: [FoodScalarWhereInput!]
  NOT: [FoodScalarWhereInput!]
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

input FoodUpdateDataInput {
  name: String
}

input FoodUpdateInput {
  name: String
}

input FoodUpdateManyDataInput {
  name: String
}

input FoodUpdateManyInput {
  create: [FoodCreateInput!]
  update: [FoodUpdateWithWhereUniqueNestedInput!]
  upsert: [FoodUpsertWithWhereUniqueNestedInput!]
  delete: [FoodWhereUniqueInput!]
  connect: [FoodWhereUniqueInput!]
  disconnect: [FoodWhereUniqueInput!]
  deleteMany: [FoodScalarWhereInput!]
  updateMany: [FoodUpdateManyWithWhereNestedInput!]
}

input FoodUpdateManyMutationInput {
  name: String
}

input FoodUpdateManyWithWhereNestedInput {
  where: FoodScalarWhereInput!
  data: FoodUpdateManyDataInput!
}

input FoodUpdateWithWhereUniqueNestedInput {
  where: FoodWhereUniqueInput!
  data: FoodUpdateDataInput!
}

input FoodUpsertWithWhereUniqueNestedInput {
  where: FoodWhereUniqueInput!
  update: FoodUpdateDataInput!
  create: FoodCreateInput!
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
  createSpace(data: SpaceCreateInput!): Space!
  updateSpace(data: SpaceUpdateInput!, where: SpaceWhereUniqueInput!): Space
  updateManySpaces(data: SpaceUpdateManyMutationInput!, where: SpaceWhereInput): BatchPayload!
  upsertSpace(where: SpaceWhereUniqueInput!, create: SpaceCreateInput!, update: SpaceUpdateInput!): Space!
  deleteSpace(where: SpaceWhereUniqueInput!): Space
  deleteManySpaces(where: SpaceWhereInput): BatchPayload!
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
  space(where: SpaceWhereUniqueInput!): Space
  spaces(where: SpaceWhereInput, orderBy: SpaceOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Space]!
  spacesConnection(where: SpaceWhereInput, orderBy: SpaceOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): SpaceConnection!
  node(id: ID!): Node
}

type Space {
  id: ID!
  name: String!
  storeAs: StorageMethod!
  foods(where: FoodWhereInput, orderBy: FoodOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Food!]
  icon: String
}

type SpaceConnection {
  pageInfo: PageInfo!
  edges: [SpaceEdge]!
  aggregate: AggregateSpace!
}

input SpaceCreateInput {
  name: String!
  storeAs: StorageMethod!
  foods: FoodCreateManyInput
  icon: String
}

type SpaceEdge {
  node: Space!
  cursor: String!
}

enum SpaceOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  storeAs_ASC
  storeAs_DESC
  icon_ASC
  icon_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type SpacePreviousValues {
  id: ID!
  name: String!
  storeAs: StorageMethod!
  icon: String
}

type SpaceSubscriptionPayload {
  mutation: MutationType!
  node: Space
  updatedFields: [String!]
  previousValues: SpacePreviousValues
}

input SpaceSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: SpaceWhereInput
  AND: [SpaceSubscriptionWhereInput!]
  OR: [SpaceSubscriptionWhereInput!]
  NOT: [SpaceSubscriptionWhereInput!]
}

input SpaceUpdateInput {
  name: String
  storeAs: StorageMethod
  foods: FoodUpdateManyInput
  icon: String
}

input SpaceUpdateManyMutationInput {
  name: String
  storeAs: StorageMethod
  icon: String
}

input SpaceWhereInput {
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
  storeAs: StorageMethod
  storeAs_not: StorageMethod
  storeAs_in: [StorageMethod!]
  storeAs_not_in: [StorageMethod!]
  foods_every: FoodWhereInput
  foods_some: FoodWhereInput
  foods_none: FoodWhereInput
  icon: String
  icon_not: String
  icon_in: [String!]
  icon_not_in: [String!]
  icon_lt: String
  icon_lte: String
  icon_gt: String
  icon_gte: String
  icon_contains: String
  icon_not_contains: String
  icon_starts_with: String
  icon_not_starts_with: String
  icon_ends_with: String
  icon_not_ends_with: String
  AND: [SpaceWhereInput!]
  OR: [SpaceWhereInput!]
  NOT: [SpaceWhereInput!]
}

input SpaceWhereUniqueInput {
  id: ID
}

enum StorageMethod {
  FROZEN
  COLD
  NATURAL
}

type Subscription {
  food(where: FoodSubscriptionWhereInput): FoodSubscriptionPayload
  space(where: SpaceSubscriptionWhereInput): SpaceSubscriptionPayload
}
`
      }
    
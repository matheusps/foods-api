export const validEstimates = (parent, args, context) =>
  context.prisma.food({ id: parent.id }).validEstimates()

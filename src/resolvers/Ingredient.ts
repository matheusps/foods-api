export const food = (parent, args, context) =>
  context.prisma.ingredient({ id: parent.id }).food()

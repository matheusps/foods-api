export const food = (parent, args, context) =>
  context.prisma.storedFood({ id: parent.id }).food()

export const foods = (parent, args, context) =>
  context.prisma.space({ id: parent.id }).foods()

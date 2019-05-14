export const ingredients = (parent, args, context) =>
  context.prisma.recipe({ id: parent.id }).ingredients()

export const createFood = (root, args, context) =>
  context.prisma.createFood({
    name: args.name,
  })

export const deleteFood = async (root, args, context) => {
  const deletedFood = await context.prisma.deleteFood({
    id: args.id,
  })
  return deletedFood
}

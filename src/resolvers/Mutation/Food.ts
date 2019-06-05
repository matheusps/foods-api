const createFood = (root, args, context) =>
  context.prisma.createFood({
    name: args.name,
    barCode: args.barCode,
    validEstimates: {
      create: [
        ...args.validEstimates.map(ve => ({
          method: ve.method,
          estimate: ve.estimate,
        })),
      ],
    },
  })

const deleteFood = async (root, args, context) => {
  const deletedFood = await context.prisma.deleteFood({
    id: args.id,
  })
  return deletedFood
}

export { createFood, deleteFood }

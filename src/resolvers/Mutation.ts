export const createSpace = (root, args, context) =>
  context.prisma.createSpace({
    name: args.name,
    storeAs: args.storeAs,
    icon: args.icon,
  })

export const deleteSpace = (root, args, context) =>
  context.prisma.deleteSpace({
    id: args.id,
  })

export const editSpace = (root, args, context) =>
  context.prisma.updateSpace({
    data: {
      name: args.name,
      storeAs: args.storeAs,
      icon: args.icon,
    },
    where: {
      id: args.id,
    },
  })

export const addFoodInSpace = (root, args, context) =>
  context.prisma.updateSpace({
    data: {
      foods: {
        connect: [
          {
            id: args.foodID,
          },
        ],
      },
    },
    where: {
      id: args.id,
    },
  })

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

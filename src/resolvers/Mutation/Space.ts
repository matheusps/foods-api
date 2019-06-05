const createSpace = (root, args, context) =>
  context.prisma.createSpace({
    name: args.name,
    storeAs: args.storeAs,
    icon: args.icon,
  })

const deleteSpace = async (root, args, context) => {
  const deletedSpace = await context.prisma.deleteSpace({
    id: args.id,
  })
  return deletedSpace
}

const editSpace = (root, args, context) =>
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

const addFoodInSpace = (root, args, context) =>
  context.prisma.updateSpace({
    data: {
      foods: {
        create: {
          validThru: args.validThru,
          food: {
            connect: {
              id: args.foodID,
            },
          },
        },
      },
    },
    where: {
      id: args.id,
    },
  })

export { createSpace, deleteSpace, editSpace, addFoodInSpace }

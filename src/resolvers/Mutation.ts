export const createSpace = (root, args, context) =>
  context.prisma.createSpace({
    name: args.name,
    storeAs: args.storeAs,
    icon: args.icon,
  })

export const deleteSpace = async (root, args, context) => {
  const deletedSpace = await context.prisma.deleteSpace({
    id: args.id,
  })
  return deletedSpace
}

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

export const createRecipe = (root, args, context) =>
  context.prisma.createRecipe({
    name: args.name,
    ingredients: {
      create: [
        ...args.ingredients.map(ing => ({
          amount: ing.amount,
          measure: ing.measure,
          food: {
            connect: {
              id: ing.foodID,
            },
          },
        })),
      ],
    },
  })

export const deleteRecipe = async (root, args, context) => {
  const deletedFood = await context.prisma.deleteRecipe({
    id: args.id,
  })
  return deletedFood
}

export const editRecipe = (root, args, context) =>
  context.prisma.updateRecipe({
    data: {
      name: args.name,
    },
    where: {
      id: args.id,
    },
  })

export const addIngredientsToRecipe = (root, args, context) =>
  context.prisma.updateRecipe({
    data: {
      ingredients: {
        create: [
          ...args.ingredients.map(ing => ({
            amount: ing.amount,
            measure: ing.measure,
            food: {
              connect: {
                id: ing.foodID,
              },
            },
          })),
        ],
      },
    },
    where: {
      id: args.id,
    },
  })

export const removeIngredientFromRecipe = (root, args, context) =>
  context.prisma.updateRecipe({
    data: {
      ingredients: {
        delete: { id: args.ingredientID },
      },
    },
    where: {
      id: args.id,
    },
  })

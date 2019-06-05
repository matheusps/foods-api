const createRecipe = (root, args, context) =>
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

const deleteRecipe = async (root, args, context) => {
  const deletedFood = await context.prisma.deleteRecipe({
    id: args.id,
  })
  return deletedFood
}

const editRecipe = (root, args, context) =>
  context.prisma.updateRecipe({
    data: {
      name: args.name,
    },
    where: {
      id: args.id,
    },
  })

const addIngredientsToRecipe = (root, args, context) =>
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

const removeIngredientFromRecipe = (root, args, context) =>
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

export {
  createRecipe,
  deleteRecipe,
  editRecipe,
  addIngredientsToRecipe,
  removeIngredientFromRecipe,
}

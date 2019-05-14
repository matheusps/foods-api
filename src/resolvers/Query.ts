export const status = () => '🍦Foods api is tasting amazing'

export const spaces = (parent, args, context) => context.prisma.spaces()

export const foods = (parent, args, context) => context.prisma.foods()

export const recipes = (parent, args, context) => context.prisma.recipes()

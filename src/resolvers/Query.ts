export const status = () => '🍦Foods api is tasting amazing'

export const foods = (parent, args, context) => context.prisma.foods()

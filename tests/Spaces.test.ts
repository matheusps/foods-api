import * as QueryResolvers from '../src/resolvers/Query'

describe('Query Resolvers', () => {
  it('Should return the correct status', () => {
    const output = QueryResolvers.status()
    expect(output).toEqual('🍦Foods api is tasting amazing')
  })
})

import uuidv1 from 'uuid/v1'

export default [
  {
    title: 'iPad 4 Mini',
    price: 500.01,
    inventory: 2
  },
  {
    title: 'H&M T恤 白色',
    price: 10.99,
    inventory: 10
  },
  {
    title: 'Charli XCX - Sucker CD',
    price: 19.99,
    inventory: 5
  }
].map(item => ({
  ...item,
  id: uuidv1()
}))

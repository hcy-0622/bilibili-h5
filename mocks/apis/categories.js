// const faker = require('faker')
const Mock = require('mockjs')

module.exports = (req, res) => {
  const result = Array.from({ length: 23 }).map((_, idx) => {
    const children = Array.from({ length: 9 }).map((_, idx2) => ({
      id: Mock.Random.id(),
      name: Mock.Random.cword(2, 6),
    }))
    return {
      id: Mock.Random.id(),
      name: Mock.Random.cword(2, 3),
      children,
    }
  })
  return res.json(result)
}

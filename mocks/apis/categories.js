const Mock = require('mockjs')

const OFFSET_VALUE = 11
module.exports = (req, res) => {
  const result = Array.from({ length: 23 }).map((_, idx) => {
    const children = Array.from({ length: 9 }).map((_, idx2) => ({
      id: OFFSET_VALUE + idx + idx2,
      name: Mock.Random.cword(2, 6),
    }))
    return {
      id: OFFSET_VALUE + idx,
      name: Mock.Random.cword(2, 3),
      children,
    }
  })
  return res.json(result)
}

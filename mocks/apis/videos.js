const Mock = require('mockjs')

module.exports = (req, res) => {
  const result = Array.from({ length: 66 }).map((_, idx) => {
    return {
      id: Mock.Random.id(),
      title: Mock.Random.ctitle(),
      play_count: Mock.Random.integer(10000, 9999999),
      barrage_count: Mock.Random.integer(100, 9999999),
      cover: Mock.Random.image('720x300'),
    }
  })

  return res.json(result)
}

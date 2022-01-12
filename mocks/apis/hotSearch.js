const Mock = require('mockjs')

module.exports = (req, res) => {
  const result = {
    keyword: '关于年薪百万这件事，你怎么看?',
    keywords: [
      {
        id: 1,
        keyword: '大司马',
      },
      {
        id: 2,
        keyword: '汤来喽',
      },
      {
        id: 3,
        keyword: '擅长聊天真君',
      },
      {
        id: 4,
        keyword: '微软免费神级软件',
      },
      {
        id: 5,
        keyword: '暖雪',
      },
      {
        id: 6,
        keyword: '奥密克戎如何传播',
      },
    ],
  }

  return res.json(result)
}

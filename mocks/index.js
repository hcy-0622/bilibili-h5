const delay = require('mocker-api/lib/delay')

function loadData(data) {
  const result = {}
  Object.keys(data).forEach((key) => {
    result[key] = require(data[key])
  })
  return result
}
const prefix = '/api/v1'
const proxy = loadData({
  [`GET ${prefix}/categories`]: './apis/categories',
  [`GET ${prefix}/videos`]: './apis/videos',
})

const noProxy = process.env.NO_PROXY === 'true'
module.exports = noProxy ? {} : delay(proxy, 1000)

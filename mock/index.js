const proxy = {
  'GET /mock/article': require('./article'),
  'GET /mock/articleList': require('./articleList')
}

module.exports = proxy;
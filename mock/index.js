const proxy = {
  'POST /mock/getArticle': require('./article'),
  'POST /mock/getArticleList': require('./articleList')
}

module.exports = proxy;
const proxy = {
  'POST /mock/getArticle': require('./getArticle'),
  'POST /mock/getArticleList': require('./getArticleList'),
  'POST /mock/getLabelList': require('./getLabelList')
}

module.exports = proxy;
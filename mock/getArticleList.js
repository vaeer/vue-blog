const { mock, Random } = require('mockjs');
module.exports = {
  errCode: 0,
  result: mock({
    'data|10': [{
      title: Random.cword(5, 10),
      content: Random.cparagraph(5,8),
      date: Random.datetime('yyyy-MM-dd HH:mm')
    }]
  }).data,
  errMsg: ''
};
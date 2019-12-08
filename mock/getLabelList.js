const { mock, Random } = require('mockjs');
module.exports = {
  errCode: 0,
  result: mock({
    'data|10': [{
      title: Random.csentence(2, 5),
      number: 10
    }]
  }).data,
  errMsg: ''
};
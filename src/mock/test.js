const Mock = require('mockjs');

const data = Mock.mock({
  'list|1-10': [
    {
      'id|+1': 1,
    },
  ],
});

module.exports = data;

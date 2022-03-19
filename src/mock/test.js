/*
 * @Desc:
 * @Author: JacksonZhou
 * @Date: 2022/03/19
 * @LastEditTime: 2022/03/19
 */
const Mock = require('mockjs');

const data = Mock.mock({
  'list|1-10': [
    {
      'id|+1': 1,
    },
  ],
});

module.exports = data;

/*
 * @Desc:
 * @Author: JacksonZhou
 * @Date: 2022/02/27
 * @LastEditTime: 2022/03/13
 */
const { override, addWebpackAlias } = require('customize-cra');
const path = require('path');
const addLessLoader = require('customize-cra-less-loader');

module.exports = override(
  // 配置alias
  addWebpackAlias({
    '@': path.resolve(__dirname, 'src'),
    components: path.resolve(__dirname, 'src/components'),
    mock: path.resolve(__dirname, 'src/mock'),
  }),
  // 添加less解析器
  addLessLoader({
    lessOptions: {
      javascriptEnabled: true,
      sourceMap: false,
      // modifyVars: { '@primary-color': '#1DA57A' },
    },
  }),
);

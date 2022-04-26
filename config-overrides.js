/*
 * @Desc:
 * @Author: JacksonZhou
 * @Date: 2022/02/27
 * @LastEditTime: 2022/04/26
 */
const {
  override,
  addWebpackAlias,
  adjustStyleLoaders,
} = require('customize-cra');
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
  adjustStyleLoaders((rule) => {
    if (rule.test.toString().includes('less')) {
      rule.use.push({
        loader: 'style-resources-loader',
        options: {
          patterns: path.resolve(__dirname, 'src/styles/global.less'),
          injector: 'append',
        },
      });
    }
  }),
);

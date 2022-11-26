const {
  override,
  addWebpackAlias,
  adjustStyleLoaders,
  addDecoratorsLegacy,
  disableEsLint,
  addWebpackPlugin,
} = require('customize-cra');
const chalk = require('chalk');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');

const path = require('path');
const addLessLoader = require('customize-cra-less-loader');
const exec = require('child_process').execSync;

process.env.REACT_APP_NAME = require('./package.json').name;
process.env.REACT_APP_VERSION = require('./package.json').version;
process.env.REACT_APP_BUILD_TIME = new Date().toLocaleString('zh-CN', {
  hour12: false,
});
process.env.REACT_APP_GIT_COMMIT = exec('git rev-parse --short=8 HEAD')
  .toString()
  .trim();

module.exports = {
  webpack: override(
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
    addDecoratorsLegacy(),
    disableEsLint(),
    addWebpackPlugin(
      new ProgressBarPlugin({
        format: `  :msg [:bar] ${chalk.green.bold(':percent')} (:elapsed s)`,
      }),
    ),
  ),
};

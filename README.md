# react-spa-template

基于最新版 `create-react-app` 搭建的单页面项目模板

## 特性

- 开箱即用的项目模板
- 具备良好的构建配置（webpack配置优化以及相关插件融合、项目信息输出等）
- 预设高质量依赖（axios/ahooks/...）
- 代码检查和质量保证（eslint/stylelint）
- 代码风格统一（prettier/commitlint/.husky/editorConfig/.vscode）
- 环境配置（dotenv）
- Mock server（mockjs）
- 异常监控（sentry）
- 单元测试（jest）
- 其他
  - 快捷路径 alias
  - less + css module

## 项目结构

```bash
env             # 环境配置文件
src
├─ __tests__    # 测试用例
├─ assets       # 静态资源（图标、图片、...）
├─ mock         # mock-server、mock 数据
├─ routers      # 路由配置和文件
├─ service      # 接口配置和调用函数
├─ utils        # 工具函数
├─ components   # 公共组件
├─ views        # 页面
│  └─ home
│     ├─ index.tsx
│     └─ index.module.less
├─ App.tsx
├─ index.tsx
config-overrides.js  # webpack 扩展配置
package.json
yarn.lock
# ...此处省略了一些配置文件
```

## 注意

- vscode 需要安装 eslint、prettier、stylelint 插件

## 最后

该项目会持续更新，欢迎 comment ~

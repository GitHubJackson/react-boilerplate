import log from './log';
/**
 * 测试用
 */
export function add(a: number, b: number) {
  return a + b;
}

/**
 * 显示项目配置信息，比如项目名、版本等
 */
export function showProjectInfo() {
  log.capsule(
    `${process.env.REACT_APP_NAME}`,
    `v${process.env.REACT_APP_VERSION}`,
  );
  log.primary(`Build Time:  ${process.env.REACT_APP_BUILD_TIME}`);
  log.primary(`Last Commit: ${process.env.REACT_APP_GIT_COMMIT}`);
}

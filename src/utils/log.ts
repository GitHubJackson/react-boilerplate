/**
 * @description 返回这个样式的颜色值
 * @param {String} type 样式名称 [ primary | success | warning | danger | text ]
 */
const typeColor = (type = 'default') => {
  let color = '';
  switch (type) {
    case 'default':
      color = '#35495E';
      break;
    case 'primary':
      color = '#3488ff';
      break;
    case 'success':
      color = '#43B883';
      break;
    case 'warning':
      color = '#e6a23c';
      break;
    case 'danger':
      color = '#f56c6c';
      break;
    default:
      break;
  }
  return color;
};

const log = {
  /**
   * @description 打印一个 [ title | text ] 样式的信息
   * @param {String} title title text
   * @param {String} info info text
   * @param {String} type style
   */
  capsule(title: string, info: string, type = 'primary') {
    console.log(
      `%c ${title} %c ${info} %c`,
      'background:#35495E; padding: 1px; border-radius: 3px 0 0 3px; color: #fff;',
      `background:${typeColor(
        type,
      )}; padding: 1px; border-radius: 0 3px 3px 0;  color: #fff;`,
      'background:transparent',
    );
  },

  /**
   * @description 打印彩色文字
   */
  colorful(textArr: Array<{ text?: string; type: string }>) {
    console.log(
      `%c${textArr.map((t) => t.text || '').join('%c')}`,
      ...textArr.map((t) => `color: ${typeColor(t.type)};`),
    );
  },

  /**
   * @description 打印 default 样式的文字
   */
  default(text: string) {
    this.colorful([{ text, type: 'default' }]);
  },

  /**
   * @description 打印 primary 样式的文字
   */
  primary(text: string) {
    this.colorful([{ text, type: 'primary' }]);
  },

  /**
   * @description 打印 success 样式的文字
   */
  success(text: string) {
    this.colorful([{ text, type: 'success' }]);
  },

  /**
   * @description 打印 warning 样式的文字
   */
  warning(text: string) {
    this.colorful([{ text, type: 'warning' }]);
  },

  /**
   * @description 打印 danger 样式的文字
   */
  danger(text: string) {
    this.colorful([{ text, type: 'danger' }]);
  },
};

export default log;

/*
 * @Desc:
 * @Author: JacksonZhou
 * @Date: 2022/03/15
 * @LastEditTime: 2022/03/15
 */
// FIXME 暂不支持 alias 导入
import { add } from '../../utils';

it('add numbers', () => {
  expect(add(1, 2)).toEqual(3);
  expect(add(2, 2)).toEqual(4);
});

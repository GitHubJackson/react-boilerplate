import { service } from '..';

/**
 * 获取用户列表
 */
export async function getUserList() {
  const res: any = await service.get('xxx');
  if (res.code !== 200) {
    console.error(`message: ${res.msg}, error: ${res.errorMsg}`, 2.5);
    return;
  }
  return res.data;
}

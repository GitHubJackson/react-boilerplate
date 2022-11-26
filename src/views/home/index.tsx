// import { useRequest } from 'ahooks';
// import { getUserList } from '@/service/api/user';
import Counter from '@/components/counter';
import styles from './index.module.less';

export default function Home() {
  // 获取用户列表
  // const { data } = useRequest(getUserList, {
  //   manual: false,
  //   onSuccess: (data) => {
  //     console.log(data);
  //   },
  // });

  return (
    <div className={styles['container']}>
      <div className={styles['title']}>Home</div>
      <Counter></Counter>
    </div>
  );
}

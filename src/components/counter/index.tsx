import { useState } from 'react';
import { Button } from 'antd';
import styles from './index.module.less';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className={styles['container']}>
      <Button onClick={() => setCount(count + 1)}>+</Button>
      <div className={styles['count']}>{count}</div>
      <Button onClick={() => setCount(count - 1)}>-</Button>
    </div>
  );
}

export default Counter;

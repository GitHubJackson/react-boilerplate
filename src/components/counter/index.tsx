/*
 * @Desc:
 * @Author: JacksonZhou
 * @Date: 2022/02/27
 * @LastEditTime: 2022/02/27
 */
import React, { useState } from 'react';
import styles from './index.module.less';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className={styles['container']}>
      <button className={styles['btn']} onClick={() => setCount(count + 1)}>
        +
      </button>
      <div className={styles['count']}>{count}</div>
      <button className={styles['btn']} onClick={() => setCount(count - 1)}>
        -
      </button>
    </div>
  );
}

export default Counter;

/*
 * @Desc:
 * @Author: JacksonZhou
 * @Date: 2022/03/13
 * @LastEditTime: 2022/03/15
 */
import React from 'react';

const LazyCounter = React.lazy(() => import('@/components/counter'));
const lazyHome = React.lazy(() => import('@/views/home'));

export const routers = [
  {
    /**
     * 测试页面
     */
    path: '/counter',
    component: LazyCounter,
  },
  {
    path: '/',
    component: lazyHome,
  },
];

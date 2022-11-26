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

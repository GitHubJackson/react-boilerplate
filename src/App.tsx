import { Suspense } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import { routers } from './routers';
import 'antd/dist/antd.min.css';
import './App.css';

function App() {
  const FallbackComponent = null;
  return (
    <div className="app">
      <Router>
        <Suspense fallback={FallbackComponent}>
          <Routes>
            {routers.length > 0 &&
              routers.map((router) => {
                return (
                  <Route
                    path={router.path}
                    element={<router.component />}
                    key={router.path}
                  />
                );
              })}
            {/* 路由重定向 */}
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;

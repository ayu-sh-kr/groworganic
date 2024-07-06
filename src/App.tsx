import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Loader from './components/shared/Loader';

// Lazy-loaded components
const Home = React.lazy(() => import('./pages/Home'));
const Users = React.lazy(() => import('./pages/Users'));

const App = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/users' element={<Users />} />
      </Routes>
    </Suspense>
  );
};

export default App;

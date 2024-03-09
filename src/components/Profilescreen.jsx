import React, { useEffect, useState, lazy, Suspense } from 'react';
import { Navigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import RouteConfig from '../routes/index';
import { useAuth } from './AuthContext';
import Loader from '../common/Loader';
import MyComponent from '../layouts/MyComponent';
import DefaultLayout from '../layouts/DefaultLayout';
import { Routes, Route } from 'react-router-dom';
import Subscription from "./Subscription";
import Profile from '../layouts/Profile';

// const ECommerce = lazy(() => import('./pages/Dashboard/ECommerce'));

function Profilescreen() {
  const { isLoggedIn } = useAuth();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  // If the user is not logged in, redirect them to the login page
  
  return loading ? (
    <Loader />
  ) : (
    <>
      <Toaster
        position="top-right"
        reverseOrder={false}
        containerClassName="overflow-auto"
      />
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route index element={
            <><Profile /></>

          } />
          {RouteConfig.map((routes, index) => {
            const { path, component: Component } = routes;
            return (
              <Route
                key={index}
                path={path}
                element={
                  <Suspense fallback={<Loader />}>
                    <Component />
                  </Suspense>
                }
              />
            );
          })}
          {/* {RouteConfig.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              element={
                <Suspense fallback={<Loader />}>
                  <route.component />
                </Suspense>
              }
            />
          ))} */}
        </Route>
      </Routes>
    </>
  );
}

export default Profilescreen;


// import React from "react";
// import { useAuth } from "./AuthContext";
// import { Navigate } from "react-router-dom";
// import MyComponent from "../layouts/MyComponent";
// import DefaultLayout from "../layouts/DefaultLayout";

// function Dashboard() {
//   const { isLoggedIn } = useAuth();

//   // If the user is not logged in, redirect them to the login page
//   if (!isLoggedIn) {
//     return <Navigate to="/login" />;
//   }

//   return (
//     <div>
//       <h1>Dashboard</h1>
//       <MyComponent />
//       <DefaultLayout />
//     </div>
//   );
// }

// export default Dashboard;








// Dashboard.jsx
import React, { useEffect, useState, lazy, Suspense } from 'react';
import { Navigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import RouteConfig from '../routes/index';
import { useAuth } from './AuthContext';
import Loader from '../common/Loader';
import MyComponent from '../layouts/MyComponent';
import DefaultLayout from '../layouts/DefaultLayout';
import { Routes, Route } from 'react-router-dom';
import Subscription from "../components/Subscription";

// const ECommerce = lazy(() => import('./pages/Dashboard/ECommerce'));

function Dashboard() {
  const { isLoggedIn } = useAuth();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  // If the user is not logged in, redirect them to the login page
  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }

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
            <><MyComponent /></>

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

export default Dashboard;



// Dashboard.jsx
// import React, { useEffect, useState, lazy, Suspense } from 'react';
// import { Navigate, Routes, Route } from 'react-router-dom';
// import { Toaster } from 'react-hot-toast';
// import RouteConfig from '../routes/index';
// import { useAuth } from './AuthContext';
// import Loader from '../common/Loader';
// import MyComponent from '../layouts/MyComponent';
// import DefaultLayout from '../layouts/DefaultLayout';

// function Dashboard() {
//   const { isLoggedIn } = useAuth();
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     setTimeout(() => setLoading(false), 1000);
//   }, []);

//   // If the user is not logged in, redirect them to the login page
//   if (!isLoggedIn) {
//     return <Navigate to="/login" />;
//   }

//   return loading ? (
//     <Loader />
//   ) : (
//     <>
//       <Toaster
//         position="top-right"
//         reverseOrder={false}
//         containerClassName="overflow-auto"
//       />
//       <Routes>
//         <Route
//           path="/" // Add trailing '*' for partial match
//           element={
//             <DefaultLayout>
//               <MyComponent />
//             </DefaultLayout>
//           }
//         />
//         {RouteConfig.map((route, index) => (
//           <Route
//             key={index}
//             path={route.path}
//             element={
//               <Suspense fallback={<Loader />}>
//                 <route.component />
//               </Suspense>
//             }
//           />
//         ))}
//       </Routes>
//     </>
//   );
// }

// export default Dashboard;



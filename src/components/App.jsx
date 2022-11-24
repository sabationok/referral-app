import React from 'react';
import { lazy, Suspense } from 'react';
import { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { userCurrentThunk } from 'redux/auth/authThunks';
import { selectUserData } from 'redux/selectors';

import { NotMobileRoute } from './DeviceTypeInformer/DeviceTypeController';
// import { useLocation, useNavigate } from 'react-router-dom';
import Layout from './Layout/Layout';
import MobileRoute from './DeviceTypeInformer/DeviceTypeController';

import AppLoader from './AppLoader/AppLoader';

import { ToastContainer } from 'react-toastify';

// import DeviceTypeInformer from './DeviceTypeInformer/DeviceTypeInformer';

import scss from './App.module.scss';

const AdminRoute = lazy(() => import('./AppRoutes/AdminRoute'));
const PrivateRoute = lazy(() => import('./AppRoutes/PrivateRoute'));
const PublicRoute = lazy(() => import('./AppRoutes/PublicRoute'));
const SignInPage = lazy(() => import('./AppPages/SignInPage/SignInPage'));
const SignUpPage = lazy(() => import('./AppPages/SignUpPage/SignUpPage'));
const MainPage = lazy(() => import('./AppPages/MainPage/MainPage'));
const WellcomePage = lazy(() => import('./AppPages/WellcomePage/WellcomePage'));
const MainPageMobile = lazy(() =>
  import('./AppPages/MainPageMobile/MainPageMobile')
);
const AdminPage = lazy(() => import('./AppPages/AdminPage/AdminPage'));
const NotFoundPage = lazy(() => import('./AppPages/NotFoundPage/NotFoundPage'));

export const App = () => {
  // const location = useLocation();
  // const navigateTo = useNavigate();
  const dispatch = useDispatch();
  const {
    tokens: { accessToken },
  } = useSelector(selectUserData);

  useEffect(() => {
    if (accessToken) {
      dispatch(userCurrentThunk());
      return;
    }
  }, [dispatch, accessToken]);

  return (
    <>
      <div className={scss.app}>
        <Layout>
          <Suspense fallback={<AppLoader isLoading={true} />}>
            <Routes>
              <Route path="/" element={<PrivateRoute redirectTo="signIn" />}>
                <Route path="/" element={<MobileRoute redirectTo="main" />}>
                  <Route index element={<Navigate to="mobile/wallet" />} />
                  <Route path="mobile/*" element={<MainPageMobile />} />
                </Route>
                <Route
                  path="/"
                  element={<NotMobileRoute redirectTo="mobile/wallet" />}
                >
                  <Route index element={<Navigate to="main" />} />
                  <Route path="main" element={<MainPage />} />
                </Route>
              </Route>

              <Route path="/" element={<PublicRoute redirectTo="main" />}>
                <Route index element={<WellcomePage />} />
                <Route path="signIn" element={<SignInPage />} />
                <Route path="signUp">
                  <Route index element={<SignUpPage />} />
                  <Route path=":referrerId" element={<SignUpPage />} />
                </Route>
              </Route>

              <Route path="/" element={<AdminRoute redirectTo="main" />}>
                <Route index element={<AdminPage />} />
                <Route path="admin" element={<AdminPage />} />
              </Route>

              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </Suspense>
        </Layout>
      </div>
      {/* <DeviceTypeInformer /> */}
      <ToastContainer
        position="bottom-left"
        autoClose={3000}
        limit={3}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  );
};

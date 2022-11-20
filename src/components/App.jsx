import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userCurrentThunk } from 'redux/auth/authThunks';

import { selectUserData } from 'redux/selectors';
import Layout from './Layout/Layout';

import AppLoader from './AppLoader/AppLoader';

import NotFoundPage from './AppPages/NotFound/NotFoundPage';
import DeviceTypeInformer from './DeviceTypeInformer/DeviceTypeInformer';

import scss from './App.module.scss';

const AdminRoute = lazy(() => import('./AppRoutes/AdminRoute'));
const PrivateRoute = lazy(() => import('./AppRoutes/PrivateRoute'));
const PublicRoute = lazy(() => import('./AppRoutes/PublicRoute'));
const SignInPage = lazy(() => import('./AppPages/SignInPage/SignInPage'));
const SignUpPage = lazy(() => import('./AppPages/SignUpPage/SignUpPage'));
const MainPage = lazy(() => import('./AppPages/MainPage/MainPage'));
const AdminPage = lazy(() => import('./AppPages/AdminPage/AdminPage'));

export const App = () => {
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
    <div className={scss.app}>
      <Layout>
        <Suspense fallback={<AppLoader isLoading={true} />}>
          <Routes>
            <Route path="/" element={<PrivateRoute redirectTo="signIn" />}>
              <Route index element={<MainPage />} />
              <Route path="main" element={<MainPage />} />
            </Route>
            
            <Route path="/" element={<PublicRoute redirectTo="main" />}>
              <Route index element={<SignInPage />} />
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
      <DeviceTypeInformer />
    </div>
  );
};

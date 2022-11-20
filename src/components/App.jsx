import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userCurrentThunk } from 'redux/auth/authThunks';
import {
  getBlockedBonusesThunk,
  getActiveBonusesThunk,
} from 'redux/transactions/transactionsThunks';

import { selectUserData } from 'redux/selectors';
import Layout from './Layout/Layout';

import AppLoader from './AppLoader/AppLoader';

import NotFoundPage from './Pages/NotFound/NotFoundPage';
import DeviceTypeInformer from './DeviceTypeInformer/DeviceTypeInformer';

import scss from './App.module.scss';

const AdminRoute = lazy(() => import('./Routes/AdminRoute'));
const PrivateRoute = lazy(() => import('./Routes/PrivateRoute'));
const PublicRoute = lazy(() => import('./Routes/PublicRoute'));
const SignInPage = lazy(() => import('./Pages/SignInPage/SignInPage'));
const SignUpPage = lazy(() => import('./Pages/SignUpPage/SignUpPage'));
const MainPage = lazy(() => import('./Pages/MainPage/MainPage'));
const AdminPage = lazy(() => import('./Pages/AdminPage/AdminPage'));

export const App = () => {
  const dispatch = useDispatch();
  const {
    tokens: { accessToken },
  } = useSelector(selectUserData);

  useEffect(() => {
    if (accessToken) {
      dispatch(userCurrentThunk());
      dispatch(getActiveBonusesThunk());
      dispatch(getBlockedBonusesThunk());
    }
  }, [dispatch, accessToken]);

  return (
    <div className={scss.app}>
      <Layout>
        <Suspense fallback={<AppLoader isLoading={true} />}>
          <Routes>
            <Route path="/" element={<PublicRoute redirectTo="main" />}>
              <Route index element={<SignInPage />} />
              <Route path="signIn" element={<SignInPage />} />
              <Route path="signUp/*">
                <Route index element={<SignUpPage />}></Route>
                <Route path=":referrerId" element={<SignUpPage />}></Route>
              </Route>
            </Route>
            <Route path="/" element={<PrivateRoute redirectTo="signIn" />}>
              <Route index element={<MainPage />} />
              <Route path="main" element={<MainPage />} />
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

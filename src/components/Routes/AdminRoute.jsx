import PropTypes from 'prop-types';
import { Navigate, Outlet } from 'react-router-dom';

import { selectUserData } from 'redux/selectors';

import { useSelector } from 'react-redux';

export default function AdminRoute({ redirectTo, ...routeProps }) {
  const { isLoggedIn, admin } = useSelector(selectUserData);

  return isLoggedIn && admin.isAdmin ? (
    <Outlet />
  ) : (
    <Navigate to={redirectTo} replace={true} />
  );
}

AdminRoute.propTypes = {
  redirectTo: PropTypes.string,
};

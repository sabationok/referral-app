import PropTypes from 'prop-types';
import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectUserData } from 'redux/selectors';
export default function PublicRoute({ redirectTo, end, ...routeProps }) {
  const { isLoggedIn } = useSelector(selectUserData);
  return isLoggedIn ? <Navigate to={redirectTo} /> : <Outlet />;
}

PublicRoute.propTypes = {
  redirectTo: PropTypes.string,
};

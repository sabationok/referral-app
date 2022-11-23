import { useMediaQuery } from 'react-responsive';
import { Navigate, Outlet } from 'react-router-dom';

export const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 1000 });
  return isDesktop ? children : null;
};
export const Tablet = ({ children }) => {
  const isTablet = useMediaQuery({ minWidth: 480, maxWidth: 768 });
  return isTablet ? children : null;
};
export const TabletXL = ({ children }) => {
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1000 });
  return isTablet ? children : null;
};
export const AllTablets = ({ children }) => {
  const isTablet = useMediaQuery({ minWidth: 480, maxWidth: 1000 });
  return isTablet ? children : null;
};
export const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 480 });
  return isMobile ? children : null;
};
export const MaxToTablet = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  return isMobile ? children : null;
};
export const NotMobile = ({ children }) => {
  const isNotMobile = useMediaQuery({ minWidth: 768 });
  return isNotMobile ? children : null;
};
export const NotMobileRoute = ({ redirectTo }) => {
  const isMobile = useMediaQuery({ minWidth: 768 });
  return isMobile ? <Outlet /> : <Navigate to={redirectTo} />;
};
const MobileRoute = ({ redirectTo }) => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  return isMobile ? <Outlet /> : <Navigate to={redirectTo} />;
};
export default MobileRoute;

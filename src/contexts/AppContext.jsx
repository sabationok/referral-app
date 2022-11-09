import { createContext, useContext, useState } from 'react';
import { users } from 'data/users';

const AppContext = createContext();

export const useApp = () => useContext(AppContext);

export const AppProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState(null);
  const [userType, setUserType] = useState(null);
  const [userId, setUserId] = useState(null);
  const [userEmail, setUserEmail] = useState(null);

  const logIn = ({ userName, userType, userId, userEmail }) => {
    setIsLoggedIn(true);
    setUserName(userName);
    setUserType(userType);
    setUserId(userId);
    setUserEmail(userEmail);
  };

  const logOut = () => {
    setIsLoggedIn(false);
    setUserName(null);
    setUserType(null);
    setUserId(null);
    setUserEmail(null);
  };
  return (
    <AppContext.Provider
      value={{
        isLoggedIn,
        userName,
        userType,
        userId,
        userEmail,
        logIn,
        logOut,
        users,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

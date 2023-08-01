import { createContext, useState } from "react";

export const loginContext = createContext();

export const LoginContextProvider = ({ children }) => {
  const [isLogin, setIsLogin] = useState(false);
  function handleLogin() {
    setIsLogin(!isLogin);
  }
  return (
    <loginContext.Provider value={{ isLogin, handleLogin }}>
      {children}
    </loginContext.Provider>
  );
};

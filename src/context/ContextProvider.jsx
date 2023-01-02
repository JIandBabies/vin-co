import { createContext, useMemo, useState } from "react";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [token, setToken] = useState(() =>
    localStorage.getItem("token") ? localStorage.getItem("token") : null,
  );
  const tokenWapper = useMemo(
    () => ({
      token,
      setToken,
    }),
    [token, setToken],
  );

  return (
    <AuthContext.Provider value={tokenWapper}>{children}</AuthContext.Provider>
  );
};

export default AuthContext;

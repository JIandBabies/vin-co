import { useContext } from "react";
import { Route, Navigate } from "react-router-dom";
import AuthContext from "../../context/ContextProvider";

const PrivateRoute = ({ children }) => {
  const { token } = useContext(AuthContext);

  return token ? children : <Navigate to="/login" />;
};
export default PrivateRoute;

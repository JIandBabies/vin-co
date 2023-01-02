import { Routes, Route } from "react-router-dom";

import Cart from "./pages/cart/Cart";
import Layout from "./componets/Layout";
import NotFound from "./pages/404/NotFound";
import Home from "./pages/home/Home";
import Shop from "./pages/shop/Shop";
import Search from "./pages/search/Search";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import Account from "./pages/account/Account";
import Payment from "./pages/payment/Payment";
import { AuthContextProvider } from "./context/ContextProvider";
import PublicRoute from "./componets/router/PublicRoute";
import PrivateRoute from "./componets/router/PrivateRoute";

const App = () => {
  return (
    <AuthContextProvider>
      <div className="App">
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/search" element={<Search />} />
            <Route path="/about" element={<Home />} />
            <Route
              path="/account"
              element={
                <PrivateRoute>
                  <Account />
                </PrivateRoute>
              }
            />
            <Route
              path="/login"
              element={
                <PublicRoute>
                  <Login />
                </PublicRoute>
              }
            />
            <Route
              path="/signup"
              element={
                <PublicRoute>
                  <Signup />
                </PublicRoute>
              }
            />
            <Route path="/cart" element={<Cart />} />
          </Route>
          <Route path="/payment" element={<Payment />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </AuthContextProvider>
  );
};

export default App;

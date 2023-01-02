import { Outlet } from "react-router-dom";
import Footer from "./footer/Footer";
import Header from "./header/Header";

const Layout = () => {
  return (
    <>
      <Header />
      <main
        style={{
          paddingTop: "4rem",
        }}
      >
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
export default Layout;

import Header from "../components/header/Header";
import { Outlet } from "react-router-dom";
import Shop from "../components/shop/Shop";
import Footer from "../components/footer/footer";

const Layout = () => {
  return (
    <>
      <Shop />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;

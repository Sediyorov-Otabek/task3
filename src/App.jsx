import { Route, Routes } from "react-router-dom";

import Layout from "./layout/layout";
import Home from "./pages/home/Home";
import ProductsSection from "./components/products-section/Products-section";
import { useGetCategoryQuery } from "./redux/api/categoreyApi";
import Hero from "./components/hero/Hero";
import SinglProdutc from "./pages/singlProdutc/Singl-Produtc";
import Cartproducts from "./components/cartproducts/Cartproducts";
import { useSelector } from "react-redux";

function App() {
  const cart = useSelector((state) => state.cart.value);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />

          <Route path="/products" element={<ProductsSection />} />
          <Route path="products/:id" element={<SinglProdutc />} />
          <Route path="/cartProducts" element={<Cartproducts data={cart} />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

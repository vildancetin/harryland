import { Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import Home from "../pages/Home";
import Products from "../pages/Products";
import PrivateRouter from "./PrivateRouter";
import About from "../pages/About";
import ProductDetail from "../pages/ProductDetail";
import HomeCardInfo from "../pages/HomeCardInfo";
const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />

        <Route path="/home" element={<PrivateRouter />}>
          <Route path="" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="products" element={<Products />} />
          <Route path="products/:id" element={<ProductDetail />} />
          <Route path="wandshop" element={<HomeCardInfo />} />
          <Route path="trunkstation" element={<HomeCardInfo />} />
          <Route path="clothingcollection" element={<HomeCardInfo />} />
          <Route path="sweettrolley" element={<HomeCardInfo />} />
        </Route>
      </Routes>
    </>
  );
};

export default AppRouter;

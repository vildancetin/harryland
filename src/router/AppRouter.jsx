import { Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import Home from "../pages/Home";
import Products from "../pages/Products";
import PrivateRouter from "./PrivateRouter";
import About from "../pages/About";
const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />

        <Route path="/home" element={<PrivateRouter />}>
          <Route path="" element={<Home/>}/>
          <Route path="about" element={<About/>}/>
          <Route path="products" element={<Products/>}/>
        </Route>
      </Routes>
    </>
  );
};

export default AppRouter;

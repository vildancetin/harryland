import { Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import Home from "../pages/Home";
import Products from "../pages/Products";
import PrivateRouter from "./PrivateRouter";
import About from "../pages/About";
import WandShop from "../pages/WandShop";
import TrunkStation from "../pages/TrunkStation";
import Clothing from "../pages/Clothing";
import SweetTrolley from "../pages/SweetTrolley";
const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />

        <Route path="/home" element={<PrivateRouter />}>
          <Route path="" element={<Home/>}/>
          <Route path="about" element={<About/>}/>
          <Route path="products" element={<Products/>}/>
        <Route path="wandshop" element={<WandShop/>}/>
        <Route path="trunkstation" element={<TrunkStation/>}/>
        <Route path="clothingcollection" element={<Clothing/>}/>
        <Route path="sweettrolley" element={<SweetTrolley/>}/>
        </Route>
      </Routes>
    </>
  );
};

export default AppRouter;

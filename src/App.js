import LoginProvider from "./context/LoginProvider";
import ProductProvider from "./context/ProductProvider";
import ShoppinCartProvider from "./context/ShoppinCartProvider";
import AppRouter from "./router/AppRouter";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <LoginProvider>
      <ProductProvider>
        <ShoppinCartProvider>
          <AppRouter />
        </ShoppinCartProvider>
        <ToastContainer />
      </ProductProvider>
    </LoginProvider>
  );
}

export default App;

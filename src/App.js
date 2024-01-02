import LoginProvider from "./context/LoginProvider";
import ProductProvider from "./context/ProductProvider";
import AppRouter from "./router/AppRouter";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <LoginProvider>
      <ProductProvider>
        <AppRouter />
        <ToastContainer/>
      </ProductProvider>
    </LoginProvider>
  );
}

export default App;

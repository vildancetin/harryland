import { Navigate,Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useLogin } from "../context/LoginProvider";
const PrivateRouter = () => {
  const {user} = useLogin();
  return (
    <>
      {user.email && user.password ? (
        <>
          <Navbar />
          <Outlet />
        </>
      ) : (
        <Navigate to="/"/>
      )}
    </>
  );
};

export default PrivateRouter;

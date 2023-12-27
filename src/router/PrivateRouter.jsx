import { Navigate,Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
const PrivateRouter = () => {
  const user = true;
  return (
    <>
      {user ? (
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

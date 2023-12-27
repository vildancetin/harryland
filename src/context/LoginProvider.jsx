import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginContext = createContext();

const LoginProvider = ({ children }) => {
  const [user, setUser] = useState(
    JSON.parse(sessionStorage.getItem("user")) || ""
  );
  const navigate = useNavigate();
  const login = (userInfo) => {
    setUser(userInfo);
    navigate("/home");
  };
  useEffect(() => {
    sessionStorage.setItem("user", JSON.stringify(user));
  }, [user]);
  const logout=()=>{
    setUser("")
  }
  return (
    <LoginContext.Provider value={{ user, login ,logout}}>
      {children}
    </LoginContext.Provider>
  );
};
export const useLogin=()=>{
    return useContext(LoginContext)
}
export default LoginProvider;

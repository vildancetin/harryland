import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { succesfully,warning } from "../helper/toastHelpers";
const LoginContext = createContext();

const LoginProvider = ({ children }) => {
    // ? get user info from storage or create empty
  const [user, setUser] = useState(
    JSON.parse(sessionStorage.getItem("user")) || ""
  );
  const navigate = useNavigate();
//   ? after login navigate to home page
  const login = (userInfo) => {
    setUser(userInfo);
    succesfully("Login succesfully ...")
    setTimeout(() => {
      
      navigate("/home");
    }, 1000);
  };
// ? save to session storage
  useEffect(() => {
    sessionStorage.setItem("user", JSON.stringify(user));
  }, [user]);
// ? logout end of the 1s
  const logout=()=>{
    warning("You logout!")
    setTimeout(() => {
        setUser("")
    }, 1000);
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

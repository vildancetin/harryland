import { Route,Routes } from "react-router-dom"
import Login from "../pages/Login"

const AppRouter = () => {
  return (
    <Routes>
        <Route path="/" element={<Login/>}/>
    </Routes>
  )
}

export default AppRouter
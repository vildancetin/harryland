import LoginProvider from "./context/LoginProvider"
import AppRouter from "./router/AppRouter"

function App() {
  return (
    <LoginProvider>
      <AppRouter/>
    </LoginProvider>
  )
}

export default App


import { LoginPage } from "./Login"
import { SignUp } from "./Sign-up"
import { HomePage } from "./Home"
import { Routes, Route } from "react-router-dom"

function App() {


  return (


    <Routes>

      <Route path="/" element={<LoginPage />} />
      <Route path="Register" element={<SignUp />} />
      <Route path="home" element={<HomePage />} />



    </Routes>


  )
}

export default App

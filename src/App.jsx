
import { LoginPage } from "./Login"
import { SignUp } from "./Sign-up"
import { HomePage } from "./Home"
import { Routes, Route } from "react-router-dom"
import { useState } from "react";
import { ProfilePage } from "./Profile";

function App() {

  const [name, setName] = useState("");

  return (


    <Routes>

      <Route path="/" element={<LoginPage />} />
      <Route path="Register" element={<SignUp setName={setName} />} />
      <Route path="home" element={<HomePage name={name} />} />
      <Route path="profile" element={<ProfilePage />} />




    </Routes>


  )
}

export default App

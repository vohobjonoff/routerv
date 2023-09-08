import { Route, Routes } from "react-router";
import Navbar from "./components/Navbar";
import Users from "./components/Users";
import Home from "./components/Home";
import User from "./components/User";


function App() {


  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/"  element={<Home />} />
        <Route path="/users"  element={<Users />} />
        <Route path="/user/:id"  element={<User />} />
      </Routes>

    </>
  )
}

export default App

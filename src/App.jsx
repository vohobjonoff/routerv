import { Route, Routes } from "react-router";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Single from "./components/Single";


function App() {


  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/"  element={<Home />} />
        <Route path="single/:id"  element={<Single />} />
      </Routes>

    </>
  )
}

export default App

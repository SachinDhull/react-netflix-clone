import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/react-netflix-clone' element={<Home />} />
        <Route path='/react-netflix-clone' element={<Home />} />
        <Route path="/login" element={<Login/>}/>
        <Route path='/signup' element={<SignUp/>}/>
      </Routes>
    </>
  );
}

export default App;

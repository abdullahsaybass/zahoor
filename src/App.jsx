
import './App.css'
import Contact from './Contact/Contact'
import Home from './Home/Home'
import Service from './Service/service'
import Ourmenu from './Ourmenu/Menur'
import { Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar/Navbar'
<<<<<<< HEAD
=======
import Outlet from './Outletss/Outlet'
>>>>>>> 9825442 (add zahoor master)
function App() {
  

  return (
    <>
    
    {/* <Home /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/our-menu" element={<Ourmenu />} />
        <Route path="/service" element={<Service />} />
<<<<<<< HEAD
=======
        <Route path="/outlet" element={<Outlet />} />
>>>>>>> 9825442 (add zahoor master)
      </Routes>
    </>
  )
}

export default App

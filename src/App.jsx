import { BrowserRouter,Routes,Route } from "react-router-dom"
import Main from "./pages/main"
import Gallery from "./pages/gallery"
import Navbar from "./components/navbar"
import Login from "./pages/login"

function App() {

  return (
    <BrowserRouter>
    <Routes>
    <Route path="/Login" element={<Login/>} />
    </Routes>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Main/>} />
        <Route path="/Gallery" element={<Gallery/>} />
       
      </Routes>
    </BrowserRouter>
    
  )
}

export default App

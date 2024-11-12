import { BrowserRouter,Routes,Route } from "react-router-dom"
import Main from "./pages/main"
import Gallery from "./pages/gallery"
import Navbar from "./components/navbar"
import Login from "./pages/login"
import Detail from "./pages/detail"

function App() {

  return (
    <BrowserRouter>
    <Routes>
    <Route path="/login" element={<Login/>} />
    </Routes>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Main/>} />
        <Route path="/gallery" element={<Gallery/>} />
        <Route path="/gallery/detail" element={<Detail/>} />
       
      </Routes>
    </BrowserRouter>
    
  )
}

export default App

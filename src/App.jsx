import { BrowserRouter,Routes,Route } from "react-router-dom"
import Main from "./pages/main"
import Gallery from "./pages/gallery"
import Navbar from "./components/navbar"

function App() {

  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Main/>} />
        <Route path="/Gallery" element={<Gallery/>} />
      </Routes>
    </BrowserRouter>
    
  )
}

export default App

import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/home/Home"
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles


function App() {

  // ..
AOS.init({
  duration: 1000,
  once: true,
});

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App

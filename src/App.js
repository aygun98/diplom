import { useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";


// components
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Pages from './components/Pages';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';

//
import AOS from 'aos';


function App() {

  useEffect(() => {
    AOS.init({
      duration: 2000
    });
  }, []);
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="Haqqimizda" element={<About />} />
          <Route path="sehifeler" element={<Pages />} />
          <Route path="bloq" element={<Blog />} />
          <Route path="elaqe" element={<Contact />} />

        </Routes>
      <Footer/>





      </BrowserRouter>



    </>
  );
}

export default App;

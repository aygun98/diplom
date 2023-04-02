import { useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";


// components
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import ServiceDetail from "./components/ServiceDetail";
import Pricing from "./components/Pricing";
import Blog from './components/Blog';
import SinglePost from './components/SinglePost'
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
          <Route path="haqqimizda" element={<About />} />
          <Route path="xidmetler" element={<Services/>} />
          <Route path="xidmet tefferuati" element={<ServiceDetail/>} />
          <Route path="qiymet" element={<Pricing/>} />
          <Route path="bloq" element={<Blog />} />
          <Route path="sonyazi" element={<SinglePost />} />
          <Route path="elaqe" element={<Contact />} />

        </Routes>
      <Footer/>





      </BrowserRouter>



    </>
  );
}

export default App;

import { useEffect, useState } from "react";
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
import NotPageFound from "./components/NotPageFound";

//
import AOS from 'aos';
import Loading from "./components/Loading";


function App() {
  // loading 
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 7000);
  }, [])



  //aos
  useEffect(() => {
    AOS.init({
      duration: 2000
    });
  }, []);
  return (
    <>
      {
        loading ? (<Loading />) : (
          <BrowserRouter>
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="haqqimizda" element={<About />} />
              <Route path="xidmetler" element={<Services />} />
              <Route path="xidmet tefferuati" element={<ServiceDetail />} />
              <Route path="qiymet" element={<Pricing />} />
              <Route path="bloq" element={<Blog />} />
              <Route path="ferqlerimiz" element={<SinglePost />} />
              <Route path="elaqe" element={<Contact />} />
              <Route path="*" element={<NotPageFound />} />

            </Routes>
            <Footer />
          </BrowserRouter>


        )
      }




    </>
  );
}

export default App;

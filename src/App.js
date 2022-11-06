import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import FCFS from "./components/fcfs";
import SJF from "./components/sjf";
import PS from "./components/ps";
import RR from "./components/rr";
import FCFSS from "./components/FcfsSimulate";
import SJFS from "./components/SjfSimulate";
import RRS from "./components/rrSimulate";
import PSS from "./components/psSimulate";
import AboutLa from "./components/AboutLa";

import { useMediaQuery } from "@chakra-ui/react";
// import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

const App = () => {
  const [isLargerThan1280] = useMediaQuery("(min-width: 1280px)");

  return (
    <>
      <Router>
        {/* <Navbar /> */}
        {isLargerThan1280 ? (
          <Navbar Headsize="xl" iconSize={32} />
        ) : (
          <Navbar Headsize="md" iconSize={20} />
        )}

        <Routes>  
          <Route path="/" element={<Home/>} />
          <Route path="/CpuScheduling" element={<Home/>} />
          <Route path="/Home" element={<Home/>} />
          <Route path="/about" element={<AboutLa/>} />
          <Route path="/fcfs" element={<FCFS/>} />
          <Route path="/sjf" element={<SJF/>} />
          <Route path="/rr" element={<RR/>} />
          <Route path="/ps" element={<PS/>} />
          <Route path="/fcfs/fcfsSimulate" element={<FCFSS/>} />
          <Route path="/sjf/sjfSimulate" element={<SJFS/>} />
          <Route path="/rr/rrSimulate" element={<RRS/>} />
          <Route path="/ps/psSimulate" element={<PSS/>} />
        </Routes>

        {/* {isLargerThan1280 ? <Footer height="45%" /> : <Footer height="75%" />} */}
        {/* <Footer /> */}
      </Router>
    </>
  );            
};

export default App;

import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Contact from "./Pages/Contact";
import Courses from "./Pages/Courses";
import About from "./Pages/About";
import Home from "./Pages/Home";


const App = () => {


  return (
    <div className="App">

      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="courses" element={<Courses />} />
        <Route path="contact" element={<Contact />} />

      </Routes>

    </div>
  )
}

export default App;

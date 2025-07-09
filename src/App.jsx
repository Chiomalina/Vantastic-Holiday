import React from "react";
import { Routes, Route, Link } from "react-router-dom"
import Home from "./component/Pages/Home"
import About from "./component/Pages/About"
import Vans from "./component/Pages/Vans/Vans"
import VansDetail from "./component/Pages/Vans/VansDetail"
import Layout from "../src/component/Pages/Layout"
import Dashboard from "../src/component/Pages/Host/Dashboard"
import Income from "../src/component/Pages/Host/Income"
import Reviews from "../src/component/Pages/Host/Reviews"
//import ".server"



function App() {

  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/vans" element={<Vans />} />
          <Route path="/vans/:id" element={<VansDetail />} />
          <Route path="/host" element={<Dashboard />} />
          <Route path="/host/income" element={<Income />} />
          <Route path="/host/reviews" element={<Reviews />} />
        </Route>
        
      </Routes>
    </>

  )
}

export default App

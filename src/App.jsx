import React from "react";
import { Routes, Route, Link } from "react-router-dom"
import Home from "./component/Pages/Home"
import About from "./component/Pages/About"
import Vans from "./component/Pages/Vans/Vans"
import VansDetail from "./component/Pages/Vans/VanDetail"
import Layout from "./component/Layout"
import Dashboard from "../src/component/Pages/Host/Dashboard"
import Income from "../src/component/Pages/Host/Income"
import Reviews from "../src/component/Pages/Host/Reviews"
import HostVans from "../src/component/Pages/Host/HostVans"
import HostVansDetail from "./component/Pages/Host/HostVanDetail"
import HostLayout from "./component/HostLayout"

//import ".server"



function App() {

  return (
    <>
      <Routes>
        <Route path ="/" element={<Layout />} >
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="vans" element={<Vans />} />
          <Route path="vans/:id" element={<VansDetail />} />

          <Route path="host" element={<HostLayout />} >
            <Route index element={<Dashboard />} />
            <Route path="income" element={<Income />} />
            <Route path="reviews" element={<Reviews />} />
            <Route path="vans" element={<HostVans />} />
            <Route path="vans/:id" element={<HostVansDetail />} />
          </Route>
        </Route>
      </Routes>
    </>
  )
}

export default App

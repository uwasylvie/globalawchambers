import React from "react"
import Header from "../common/header/Header"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "../home/Home"
import Footer from "../common/footer/Footer"
import About from "../about/About"
import Login from "../Login"
import Register from "../Register"
import New from "../new/New"
import Services from "../services/Services"
import Contact from "../contact/Contact"
import Messages from "../messages/Messages"

const Pages = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route  path='/' element={<Home/>} />
          <Route  path='/about' element={<About/>} />
          <Route  path='/services' element={<Services/>} />
          <Route  path='/register' element={<Register/>} />
          <Route  path='/new' element={<New/>} />
          <Route  path='/login' element={<Login/>} />
          <Route  path='/contact' element={<Contact/>} />
          <Route  path='/messages' element={<Messages/>} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default Pages

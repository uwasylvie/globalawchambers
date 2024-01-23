import React from "react"

import Featured from "./featured/Featured"
import Hero from "./hero/Hero"
import Client from "./client/Client"

import Team from "./team/Team"

const Home = () => {
  return (
    <>
      <Hero />
      <Featured />
      
     
      <Team />
      <Client />
    </>
  )
}

export default Home

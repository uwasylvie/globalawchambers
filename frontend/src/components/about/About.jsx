import React from "react"
import Back from "../common/Back"
import Heading from "../common/Heading"
import img from "../images/about.jpg"
import "./about.css"

const About = () => {
  return (
    <>
      <section className='about'>
        <Back name='About Us' title='About Us - Who We Are?'  />
        <div className='container flex mtop'>
          <div className='left row'>
            <Heading title='Our Agency Story' subtitle='Check out our company story and work process' />

            <p>Global Law Chambers Ltd is a well-established, medium-size business law firm. 
                  We offer a full range of corporate and commercial legal services, including but not limited 
                  to dispute resolution, litigation, employment, finance, company restructuring and tax. We also
                   work with non-profit organizations who may need legal services, especially in human rights related cases. </p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>
            <button className='btn2'>More About Us</button>
          </div>
          <div className='right row'>
            <img src={img} alt='' />
          </div>
        </div>
      </section>
    </>
  )
}

export default About

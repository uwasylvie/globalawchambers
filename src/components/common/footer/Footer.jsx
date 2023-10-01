import React from "react"
import { footer } from "../../data/Data"
import "./footer.css"
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <>
      <section className='footerContact'>
        <div className='container'>
          <div className='send flex'>
            <div className='text'>
              <h2>Need professional legal advice?</h2>
              <p>Get a free consultation with our legal experts</p>
            </div>
            <Link to="/new" className="btn5">Free Consultation</Link>
            
          </div>
        </div>
      </section>

      <footer>
        <div className='container'>
          

          {footer.map((val) => (
            <div className='box'>
              <h3>{val.title}</h3>
              <ul>
                {val.text.map((items) => (
                  <li> {items.list} </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </footer>
      <div className='legal'>
        <span> &copy; 2023  Global Law Chambers-All Right Reserved</span>
      </div>
    </>
  )
}

export default Footer

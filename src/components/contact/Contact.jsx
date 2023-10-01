import React from "react"

import Back from "../common/Back"
import "./contact.css"

const Contact = () => {
  return (
    <>
      <section className='contact mb'>
        <Back name='Contact Us' title='Get Helps & Friendly Support' />
        <div className='container'>
          <form className='shadow'>
            <h4>Fillup The Form</h4> <br />
              <label >Your Names</label>
              <input type='text' placeholder='Name' />
               <label >Email</label>
              <input type='text' placeholder='Email' />
            
           <label >Description</label>
            <textarea cols='30' rows='10'placeholder='Description'></textarea>
            <button>Submit Request</button>
          </form>
        </div>
      </section>
    </>
  )
}

export default Contact

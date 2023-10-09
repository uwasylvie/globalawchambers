import React from 'react'

import "./new.css"

import { Link } from "react-router-dom"


const New = () =>{
 
 
  return (
    <section className='new mb'>
      <div className="left-link"><Link to="/messages" className="btn6">Your messages</Link></div>
        
        <div className='container'>

          <form className='shadow'>
            <h4>Get a free consultation with our legal experts</h4> <br/>
            
             <label >Title</label>
              <input type='text' placeholder='Title' name="title"  />
            
            <label >Description</label>
            <textarea cols='30' rows='10' placeholder="Description" name="desc"
          ></textarea>
            <button >Submit Message</button>
           
          </form>
        </div>
      </section>
  )
}

export default New
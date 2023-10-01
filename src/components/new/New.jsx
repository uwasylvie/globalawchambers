import React from 'react'
import axios from "axios"
import "./new.css"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"


const New = () =>{
  const [message, setMessage] = useState({
    title: "",
    desc: "",
    
  });
  const [error,setError] = useState(false)

  const navigate = useNavigate();

  const handleChange = (e) => {
    setMessage((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/messages", message);
      navigate("/messages");
    } catch (err) {
      console.log(err);
      setError(true)
    }
  };
 
  return (
    <section className='new mb'>
      <div className="left-link"><Link to="/messages" className="btn6">Your messages</Link></div>
        
        <div className='container'>

          <form className='shadow'>
            <h4>Get a free consultation with our legal experts</h4> <br />
            
             <label >Title</label>
              <input type='text' placeholder='Title' name="title" onChange={handleChange} />
            
            <label >Description</label>
            <textarea cols='30' rows='10' placeholder="Description" name="desc"
        onChange={handleChange}  ></textarea>
            <button onClick={handleClick} >Submit Message</button>
            {error && "Something went wrong!"}
          </form>
        </div>
      </section>
  )
}

export default New
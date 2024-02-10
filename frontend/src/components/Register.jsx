import React from 'react'
import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import axios from "axios"


  function Register  () {
    const [values, setValues] = useState({
        name: '',
        email: '',
        password: ''
    })
    const [setError] = useState(false)
    const navigate = useNavigate()
    


    const handleClick = async (e) => {
      e.preventDefault();
      try {
        await axios.post("/register", values);
        navigate("/login");
      } catch (err) {
        console.log(err);
        setError(true)
      }
    };

  
    return (
    <div className="auth">
      
      <form >

      <h1>Register : </h1>
      <label >Name</label>
        <input
          name='name'
          type="text"
         placeholder="Enter your Name" required

         onChange = {e => setValues({...values, name: e.target.value})}
         
        />
        <label >Email</label>
        <input
          required
          type="email"
          placeholder="email"
          name="email"
          onChange = {e => setValues({...values, email: e.target.value})}
          
        />
        <label >Password</label>
        <input
          required
          type="password"
          placeholder="password"
          name="password"
          onChange ={e => setValues({...values, password: e.target.value})}
          
        />
        <button onClick={handleClick} type='submit' >Sign up</button>
        
        <span>
          Do you have an account? <Link to="/login">Login</Link>
        </span>
      </form>
    </div>
  )
}

export default Register
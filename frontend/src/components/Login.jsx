import React from 'react'
import { Link,useNavigate } from "react-router-dom"
import { useState } from "react"
import axios from "axios"

const Login = () => {
  const [values, setValues] = useState({
    
    email: '',
    password: ''
})
const [setError] = useState(false)
const navigate = useNavigate()
const handleClick = async (e) => {
  e.preventDefault();
  try {
    await axios.post("/login", values);
    navigate("/new");
  } catch (err) {
    console.log(err);
    setError(true)
  }
};
  
   
  return (
    <div className="auth">
      
      <form>
      <h1>Login : </h1>
      
      <label >Email</label>
        <input
          required
          type="text"
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
        <button onClick={handleClick} >Login</button>
        <span>
          Don't you have an account? <Link to="/register">Register</Link>
        </span>
       
      </form>
    </div>
  )
}

export default Login
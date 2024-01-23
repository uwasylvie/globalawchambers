import React from 'react'
import { Link } from "react-router-dom"


function Register() {
  return (
    <div className="auth">
      
      <form>
      <h1>Register</h1>
      <label >Username</label>
        <input
          required
          type="text"
          placeholder="username"
          name="username"
         
        />
        <label >Email</label>
        <input
          required
          type="email"
          placeholder="email"
          name="email"
          
        />
        <label >Password</label>
        <input
          required
          type="password"
          placeholder="password"
          name="password"
          
        />
        <button >Register</button>
        
        <span>
          Do you have an account? <Link to="/login">Login</Link>
        </span>
      </form>
    </div>
  )
}

export default Register
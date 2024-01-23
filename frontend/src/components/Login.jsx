import React from 'react'

function Login() {
  return (
    <div className="auth">
      
      <form>
      <h1>Login</h1>
      
      <label >Username</label>
        <input
          required
          type="text"
          placeholder="username"
          name="username"
         
        />
        <label >Password</label>
        <input
          required
          type="password"
          placeholder="password"
          name="password"
          
        />
        <button >Login</button>
        
       
      </form>
    </div>
  )
}

export default Login
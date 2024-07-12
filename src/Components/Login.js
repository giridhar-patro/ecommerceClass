import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css';

const Login = () => {
  return (
    <div>
      <form className='form-group'>
        <h2>Login Form</h2>
        <div className='username'>
          <label for="username" />Username 
          <input type="text" className="form-control" name="username" required/>
        </div>
        <div className='email'>
            <label for="email" />Emailid  
            <input type="teemail" className="form-control" name="email" required/>
        </div>
        <div className='password'>
            <label for="password" />password  
            <input type="password" className="form-control" name="password" required/>
        </div>
        <div className='button'>
          <button>Login</button>
        </div>
        
      </form>
    </div>
  )
}

export default Login
import React,{useState,useEffect} from 'react'
import './Navbar.css';
const Signup = () => {
    const[user,setUser] = useState({
        username:"",email:"",password:"", cpassword:""
    });
     
  
    let name,value;
    const handleUser = (e) =>{
        console.log(e);
        name = e.target.name;
        value = e.target.value;

        setUser({...user,[name]:value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        // Retrieve existing users from localStorage
        let users = JSON.parse(localStorage.getItem('users')) || [];

        // Add the new user
        users.push(user);

        // Save the updated users array back to localStorage
        localStorage.setItem('users', JSON.stringify(users));

        alert('Signup successful');
    };

    const getUsers = () => {
        let users = JSON.parse(localStorage.getItem('users')) || [];
        return users;
    }
    

  return (
    <div>
        <form className='form-group' onSubmit={handleSubmit}>
        <h2>Signup Form</h2>
        <div className='username'>
          <label for="username" />First Name 
          <input type="text" className="form-control" name="username" 
          value={user.name}
          onChange={handleUser} required/>
        </div>
        <div className='email'>
            <label for="email" />Emailid  
            <input type="teemail" className="form-control" name="email"
            value={user.email}
            onChange={handleUser} required/>
        </div>
        <div className='password'>
            <label for="password" />password  
            <input type="password" className="form-control" name="password"
            value={user.password}
            onChange={handleUser} required/>
        </div>

        <div className='re-password'>
            <label for="cpassword" />Re-enter-password  
            <input type="password" className="form-control" name="cpassword"
            value={user.cpassword}
            onChange={handleUser} required/>
        </div>
        <div className='button'>
          <button>Signup</button>
        </div>
        </form>
    </div>
  )
}

export default Signup
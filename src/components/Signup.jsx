import React, { useEffect, useState } from 'react'
import axios from 'axios';

const Signup = () => {
    
    const [data,setData] = useState({
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        confirmpassword: ''
    })
    const handleSubmit = (e) => {
       e.preventDefault();
        console.log(data);
    }

    const handleInputs = (e)=>{
        setData((prevstate)=>{
            return{...prevstate, [e.target.name]: e.target.value}
        })
    }

    return (
        
    <div>

      <form>
        <h3>Sign Up</h3>
        <div className="form-group">
            <label htmlFor="firstname">First Name</label>
            <input type="text" className='form-control' placeholder='First Name' name='firstname' onChange={handleInputs} />
        </div>
        <div className="form-group">
            <label htmlFor="">Last Name</label>
            <input type="text" className='form-control' placeholder='Last Name' name='lastname' onChange={handleInputs} />
        </div>
        <div className="form-group">
            <label htmlFor="">Email</label>
            <input type="email" className='form-control' placeholder='Email' name='email' onChange={handleInputs} />
        </div>
        <div className="form-group">
            <label htmlFor="">Password</label>
            <input type="password" className='form-control' name='password' placeholder='Password' onChange={handleInputs} />
        </div>
        <div className="form-group">
            <label htmlFor="">Confirm Password</label>
            <input type="password" className='form-control' name='confirmpassword' placeholder='Confirm Password' onChange={handleInputs} />
        </div>
        <button type='submit' className='btn btn-primary btn-block mt-3'>Sign Up</button>
      </form>

    </div>
  )
}

export default Signup

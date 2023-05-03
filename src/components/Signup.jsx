import React from 'react'
import axios from 'axios';

const Signup = () => {
    
   const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            firstname: this.firstname,
            lastname: this.lastname,
            email: this.firstname,
            password: this.password,
            confirmpassword: this.confirmpassword
        }
    }

    return (
        
    <div>

      <form onSubmit={handleSubmit}>
        <h3>Sign Up</h3>
        <div className="form-group">
            <label htmlFor="">First Name</label>
            <input type="text" className='form-control' placeholder='First Name' onChange={e => this.firstname = e.target.value} />
        </div>
        <div className="form-group">
            <label htmlFor="">Last Name</label>
            <input type="text" className='form-control' placeholder='Last Name' onChange={e => this.lastname = e.target.value} />
        </div>
        <div className="form-group">
            <label htmlFor="">Email</label>
            <input type="email" className='form-control' placeholder='Email' onChange={e => this.email = e.target.value} />
        </div>
        <div className="form-group">
            <label htmlFor="">Password</label>
            <input type="password" className='form-control' placeholder='Password' onChange={e => this.password = e.target.value} />
        </div>
        <div className="form-group">
            <label htmlFor="">Confirm Password</label>
            <input type="password" className='form-control' placeholder='Confirm Password' onChange={e => this.confirmpassword = e.target.value} />
        </div>
        <button type='submit' className='btn btn-primary btn-block mt-3'>Sign Up</button>
      </form>
    </div>
  )
}

export default Signup

import React from 'react'
import {Link} from 'react-router-dom'
import Nav from './Nav';


const Login  = () =>{
  
    
    return (
       <>
  <Nav/>
    <section>
      <div className="box">
          <div className="container">
              <div className="form">
                  <h2>Login</h2>
                  <form>
                <div className="group">
                <input
                    type="text"
                    className="input"
                    name="style1"
                    required
                   
                />
                <label htmlFor="style1" className="label">
                    Name
                </label>
                </div>
                <div className="group">
                <input  type="password" className="input" name="style2"  required  />
                <label htmlFor="style2" className="label">
                    Password
                </label>
                <button className='btn btn-primary'>Login</button>
                </div>
                      <p className="forget">
                          Forgot Password? <a href="#">Click Here</a>
                      </p>
                      <p className="forget">
                          Don't have an account? <Link to='/signup' >Sign-Up</Link>
                      </p>
                  </form>
              </div>
          </div>
      </div>
  </section>
       </>


    );

}



export default Login
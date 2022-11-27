import React from 'react'
import {Link} from 'react-router-dom'
import '../index.css'
import SignUp  from './Signup'

const Login  = () =>{
  
    
    return (
       <>
    
    <section>
      <div className="colour"></div>
      <div className="colour"></div>
      <div className="colour"></div>
      <div className="box">
          <div className="square"></div>
          <div className="square" ></div>
          <div className="square"></div>
          <div className="square" ></div>
          <div className="square" ></div>
          <div className="container">
              <div className="form">
                  <h2>Login</h2>
                  <form>
                      {/* <div className="input__box">
                          <input type="text" placeholder="Username" />
                      </div> */}
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
                <input  type="password" className="input" name="style2" required  />
                <label htmlFor="style2" className="label">
                    Password
                </label>
                </div>
                      {/* <div className="input__box" >
                          <input type="password" placeholder="Password" />
                      </div>
                      <div className="input__box">
                          <input type="submit" value="Login" />
                      </div> */}
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
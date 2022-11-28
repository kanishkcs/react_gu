import React from 'react'
import Nav from './Nav';


const SignUp = () =>{
return (
    

            <>
            <Nav/>
    <section>
    <div className="container">
              <div className="form">
                  <h2>Sign Up</h2>
                  <form>
                <div className="group">
                <input type="text "  className="input"  name="style1"    required   />
                <label htmlFor="style1" className="label"> Email </label>
                </div>
                <div className="group">
                <input  type="password" className="input" name="style2"  required  />
                <label htmlFor="style2" className="label">   Username</label>
                </div>
                <div className="group">
                <input type="text"  className="input"   name="style1"    required   />
                <label htmlFor="style1" className="label"> Password </label>
                </div>
                <div className="group">
                <input  type="text" className="input" name="style2"  required  />
                <label htmlFor="style2" className="label">   Confirm Password</label>
                <button className="btn btn-primary">Register</button>
                </div>
               
                    
                  </form>
              </div>
          </div>
    </section>
            </>

        );

    
}

export default SignUp
import React from 'react'
import '../index.css'


const SignUp = () =>{
return (
    

            <>
    <section>
      <div className="colour"></div>
      <div className="colour"></div>
      <div className="colour"></div>
      <div className="box">
        <div className="square" ></div>
        <div className="square" ></div>
        <div className="square"></div>
        <div className="square"></div>
        <div className="square" ></div>
        <div className="container">
          <div className="form">
            <h2>Sign-Up</h2>
            <form>
              <div className="input__box">
                <input type="text" placeholder="Username" />
              </div>
              <div className="input__box">
                <input type="mail" placeholder="email" />
              </div>
              <div className="input__box">
                <input type="password" placeholder="password" />
              </div>
              <div className="input__box">
                <input type="text" placeholder="confirm-password" />
              </div>
              <div className="input__box">
                <input type="submit" value="Sign-Up" />
              </div>

              
            </form>
          </div>
        </div>
      </div>
    </section>
            </>

        );

    
}

export default SignUp
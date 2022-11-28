import React from "react";
import { Link } from "react-router-dom";
import "../styles/index.css";
import Nav from "./Nav";
export const Profile = () => {
  return (
    <>
    <Nav/>
      <section>
        <div className="box">
          <div className="container">
            <div className="form">
              <h2>Comple Your Profile</h2>
              <form>
                <div className="group">
                  <input type="text" className="input" name="style1" required />
                  <label htmlFor="style1" className="label">
                    Full Name
                  </label>
                </div>
                <div className="group">
                  <input
                    type="text"
                    className="input"
                    name="style2"
                    required
                  />
                  <label htmlFor="style2" className="label">
                    Course
                  </label>
                
                </div>
                <div className="group">
                  <input
                    type="test"
                    className="input"
                    name="style2"
                    required
                  />
                  <label htmlFor="style2" className="label">
                    Year
                  </label>
                
                </div>
                <div className="group">
                  <input type="text" className="input" name="style1" required />
                  <label htmlFor="style1" className="label">
                    Intrests
                  </label>
                 
                  <button className="btn btn-primary">Login</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

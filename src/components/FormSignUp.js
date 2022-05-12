import React from "react";
import {Link} from 'react-router-dom'
function FormSignUp() {
  const buttonclicked = (e) =>{
    e.preventDefault()
  }
  return (
    <div className="signup-form">
      <form>
        <div className="first-second-name">
          <div className="first-name">
            <label htmlFor="signupfname">First Name</label>
            <input 
            id="signupfname"
            type={"text"}
            />
          </div>
          <div className="second-name">
            <label htmlFor="signupsname">Last Name</label>
            <input 
            id="signupsname"
            type={"text"}
            />
          </div>
        </div>
        <div className="signup-email">
          <label htmlFor="signupemail">E-mail</label>
          <input 
          id="signupemail"
          type={"email"}
          />
        </div>
        <div className="gender">
          <div className="male">
            <label htmlFor="male">Male</label>
            <input 
            id="male"
            name="radioGender"
            type={"radio"}
            />
          </div>
          <div className="female">
            <label htmlFor="female">Female</label>
            <input 
            id="female" 
            name="radioGender"
            type={"radio"}
            />
          </div>
          <div className="other-gender">
            <label htmlFor="other-gender">Other</label>
            <input 
            id="other-gender"
            name="radioGender"
            type={"radio"}
            />
          </div>
        </div>
        <div className="signup-password">
          <label htmlFor="signuppassword">Password</label>
          <input 
          id="signuppassword"
          type={"text"}
          />
        </div>
        <div className="signup-password-again">
          <label htmlFor="signuppassworda">Password again</label>
          <input 
          id="signuppassworda"
          type={"text"}
          />
        </div>
        <input 
        onClick={(e)=>buttonclicked(e)}
        value={"SIGN UP"}
        type={"submit"}
        />
      </form>
      <span className="to-signup">
        if you already have an account, you can&nbsp;
        <Link to={'/'} >sign in</Link>
      </span>
    </div>
  )
}

export default FormSignUp
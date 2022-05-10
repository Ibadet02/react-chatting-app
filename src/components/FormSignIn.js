import React from "react";
import {Link} from 'react-router-dom'
function FormSignIn() {
  return (
    <div className="signin-form">
        <form>
            <div className="signin-email">
                <label htmlFor="signinemail">E-mail</label>
                <input 
                id="signinemail"
                type={"email"}
                />
            </div>
            <div className="signin-password">
                <label htmlFor="signinpassword">Password</label>
                <input
                id="signinpassword"
                type={"text"}
                />
            </div>
            <input 
            type={"submit"}
            value="SIGN IN"
            />
        </form>
        <span className="to-signup">
            if you don't have an account, you can&nbsp;
            <Link to={'/signup'} >sign up</Link>
        </span>
    </div>
  )
}

export default FormSignIn

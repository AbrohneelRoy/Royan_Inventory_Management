import React from 'react';
import './LoginForm.css'; 
const LoginForm = () => {
  return (
    <>
      <div className="container2">
        <form>
            <h1 className="p2">Royan</h1><br />
            <h3 className="p1">Username:&nbsp;</h3>
            <input type="text" className="textbox" id="t1" placeholder="Enter Username" required/><br />
            <h3 className="p1">Password:&nbsp;</h3>
            <input type="password" className="textbox" id="p1" placeholder="Enter Password" required/><br />
            <button className="b1">Log in</button>
        </form>
      </div>
    </>
  );
};

export default LoginForm;

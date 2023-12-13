import React from 'react';
import './SignUp.css';

const SignUpForm = () => {
    return (
        <>
            <div className="container3">
                <form className="form1">
                    <h1 className="p2">Royan</h1>
                    <div>
                        <h3 className="p1">First Name:&nbsp;</h3>
                        <input type="text" className="textbox" id="firstName" placeholder="Enter First Name" required />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <h3 className="p1">Last Name:&nbsp;</h3>
                        <input type="text" className="textbox" id="lastName" placeholder="Enter Last Name" required /><br /><br />
                    </div>
                    <div>
                        <h3 className="p1">Username:&nbsp;</h3>
                        <input type="text" className="textbox" id="username" placeholder="Enter Username" required />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                        <h3 className="p1">Password:&nbsp;</h3>
                        <input type="password" className="textbox" id="password" placeholder="Enter Password" required /><br /><br />
                    </div>
                    <div>
                        <h3 className="p1">Email:&nbsp;</h3>
                        <input type="text" className="textbox" id="email" placeholder="Enter Email" required />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                        <h3 className="p1">Address:&nbsp;</h3>
                        <input type="text" className="textbox" id="address" placeholder="Enter Address" required /><br /><br />
                    </div>
                    <div>
                        <h3 className="p1">Phone Number:&nbsp;</h3>
                        <input type="text" className="textbox" id="phoneNumber" placeholder="Enter Phone Number" required />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                        <h3 className="p1">Country:&nbsp;</h3>
                        <input type="text" className="textbox" id="country" placeholder="Enter Country Name" required /><br /><br />
                    </div>
                    <button className="b1">Sign Up</button>
                </form>
            </div>
        </>
    );
};

export default SignUpForm;

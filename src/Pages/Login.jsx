import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const Login = (event) => {
        event.preventDefault();
        axios.post("https://apitest.reachstar.io/signin", {
            email: email,
            password: password
        }).then(function(response) {
            navigate("/Home");
        }).catch(function(error) {
            console.log(error);
            window.alert("მონაცემები არასწორია!");
        });
    };

    const Signup = () => {
        navigate("/Signup");
    };

    return (
        <React.Fragment>
            <div className="container-fluid"style={{height:"100vh",backgroundColor:"#C62641"}}>
                <div className="row justify-content-center align-items-center"style={{height:"100%"}}>
                    <div className="col-md-8 col-12">
                        <div className="title d-flex justify-content-center text-light"><h1>WELCOME TO BLOGSITE</h1></div>
                        <form method="POST" style={{ border: "1px solid black", padding: "20px" }} onSubmit={(event) => Login(event)}>
                            <div className="d-flex ms-auto text-light align-items-center">
                                <h1>Sign In</h1>
                                <p className="ms-auto pt-3">Create Your Account {"->"}</p>
                                <button className="btn btn-success" onClick={Signup} type="button">Sign Up</button>
                            </div>
                            <hr />
                            <label htmlFor="email" className="text-light"  style={{ display: "block" }}>Email</label>
                            <input type="email" className="mt-2 mb-2" placeholder="email" style={{ width: "100%" }} onChange={(event) => setEmail(event.target.value)} /><br />

                            <label htmlFor="password" className="text-light"  style={{ display: "block" }}>Password</label>
                            <input type="password" className="mt-2" placeholder="password" style={{ display: "block", width: "100%" }} onChange={(event) => setPassword(event.target.value)} />
                            <input type="submit" className="mt-3 w-100 bg-success text-white" value="Log in & Continue" />
                        </form>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Login;

import React from "react";
import { Link } from "react-router-dom"
import { axios } from "axios";
function Navigate() {
    return (
        <React.Fragment>
            <div className="container-fluid sticky-top" style={{ backgroundColor: "#C62641", }}>
                <div className="container">
                    <nav className="navbar  navbar-expand-lg  me-0 pt-3 ">
                        <div className="delete pt-1">
                            <Link to={"/Home"} style={{ textDecoration: "none", color: "white" }}><h3>BLOG SITE</h3></Link>
                        </div>
                        <button type="button" className="btn navbar-toggler" data-bs-target="#nav" data-bs-toggle="collapse">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div className="navbar-collapse collapse" id="nav">
                            <ul className="navbar-nav ms-auto pe-5 gap-3">
                                <li className="nav-item">
                                    <Link to={"/Home"} className="nav-link text-white delete">HOME</Link>
                                </li>
                                <li className="navbar-item">
                                    <Link to={""} className="nav-link text-white delete" >BLOGS</Link>
                                </li>
                                <li>
                                    <div className="btn btn-white bg-success delete">
                                        <Link to={"/AddPosts"} style={{ textDecoration: "none", color: "white" }}>ADD POST</Link>
                                    </div>
                                </li>
                                <li>
                                    <div className="btn btn-white delete">
                                        <Link to={"/"} style={{ textDecoration: "none", color: "white" }}>Log Out</Link>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </React.Fragment>
    )
}
export default Navigate
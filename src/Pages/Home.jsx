import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Style.css"
import axios from "axios";
import Navigate from "./Navigate";
import Logo from "../Pages/save.png"

function Home() {
    const [data, setData] = useState([]);

    useEffect(function () {
        axios.get("https://apitest.reachstar.io/blog/list").then(function (response) {
            setData(response.data);
        }).catch(function (error) {
            console.log(error);
        });
    }, []);


    return (
        <React.Fragment>
            <Navigate />
            {
                //begin of carousel
            }
            <div id="carouselExampleIndicators" class="carousel slide " style={{ backgroundColor: "#C62641", position: "sticky", top: "1px" }}>
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className=" d-flex justify-content-center align-items-center text-light" style={{ height: "100vh", textAlign: "center", fontSize: "20px" }}>
                            <div className="">
                                <h1 className="">A BEAUTIFUL BLOG WITH NO <br /> IMAGES REQUIRED</h1>
                                <p className="">Bu Madison Barnett / In Humans / 5 Comments</p>
                                <div className="d-flex justify-content-center gap-2" style={{ fontSize: "10px" }}>
                                    <button className="border-0" style={{ width: "150px", height: "30px", color: "#C62641" }}>READ ON</button>
                                    <button className="text-light" style={{ width: "150px", height: "30px", backgroundColor: "#C62641", border: "1px solid white" }}>
                                        <img src={Logo} style={{ backgroundImage: "", height: "15px", width: "15px" }}></img>   READ LATER
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className=" d-flex justify-content-center align-items-center text-light" style={{ height: "100vh", textAlign: "center", fontSize: "20px" }}>
                            <div className="">
                                <h1 className="">WHAT COULD POSSIBLY GO<br />WRONG?</h1>
                                <p className="">Bu Madison Barnett / In Humans / 3 Comments</p>
                                <div className="d-flex justify-content-center gap-2" style={{ fontSize: "10px" }}>
                                    <button className="border-0" style={{ width: "150px", height: "30px", color: "#C62641" }}>READ ON</button>
                                    <button className="text-light" style={{ width: "150px", height: "30px", backgroundColor: "#C62641", border: "1px solid white" }}>
                                        <img src={Logo} style={{ height: "15px", width: "15px" }}></img>   READ LATER
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className=" d-flex justify-content-center align-items-center text-light" style={{ height: "100vh", textAlign: "center", fontSize: "20px" }}>
                            <div className="">
                                <h1 className="">THE SIMPLEST WAYS TO<br />CHOOSE THE BEST COFFEE</h1>
                                <p className="">Bu Madison Barnett / In Humans / 2 Comments</p>
                                <div className="d-flex justify-content-center gap-2" style={{ fontSize: "10px" }}>
                                    <button className="border-0" style={{ width: "150px", height: "30px", color: "#C62641" }}>READ ON</button>
                                    <button className="text-light" style={{ width: "150px", height: "30px", backgroundColor: "#C62641", border: "1px solid white" }}>
                                        <img src={Logo} style={{ height: "15px", width: "15px" }}></img>   READ LATER
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" style={{ height: "100px", width: "100px" }} aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" style={{ height: "100px", width: "100px" }} aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            {
                //end of carousel
            }
            {
                //begin of content
            }
            <div className="container-fluid content" style={{ backgroundColor: "white", }}>
                <div className="row justify-content-center">
                    <div className="col-md-10 col-12 main-content">
                        <h1 className="text-center mt-5 mb-5">OUR BLOGS HERE</h1>
                        {
                            data.map((item, index) => <div className="card mt-5 p-3" style={{ border: "1px solid black" }}>
                                <div className="mt-2 me-auto">{item.id}</div>
                                <div className="card-header d-flex justify-content-center text-center mt-3 mb-3 border-0">
                                    <h3 className="card-title" dangerouslySetInnerHTML={{ __html: item.title }}></h3>
                                </div>
                                <div className="card-body  mt-3 mb-3 border-0 ">
                                    <p style={{textAlign:"center"}} dangerouslySetInnerHTML={{ __html: item.description }}></p>
                                </div>
                                <div className="card-footer  mt-3 mb-3 border-0">
                                    <Link to={"/posts/" + item.id} className="btn btn-success">Dtails...</Link>
                                </div>
                            </div>)
                        }
                        <div className="d-flex justify-content-center">
                            <div className="col-12 mt-5 mb-5">
                                <h3 className="text-center">BLOG SITE</h3><hr />
                                <h4 className="text-center">Created By Nika Baktadze</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {
                //end of content
            }

        </React.Fragment>
    )
}
export default Home
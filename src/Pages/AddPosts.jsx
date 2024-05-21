import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Navigate from "./Navigate";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

function AddPosts(){
    const [title, setTitle]=useState("");
    const [description, setDescription]=useState("");
    const navigate=useNavigate();
    const [editing, setEditing ]=useState(false);

    
    const addpost =(event)=>{
            event.preventDefault();
            axios.post("https://apitest.reachstar.io/blog/add", {
                title: title,
                description: description
            }).then(function(response) {
                window.alert("პოსტი დაემატა წარმატებით")
                navigate("/Home");
                window.location.reload();
                setEditing(false);
            }).catch(function(error) {
                console.log(error);
                window.alert("პოსტი არ დაემატა!");
            });
        };
        const HandleEdit=() => {
            setEditing(true);
        };
    return(
        <React.Fragment>
            <Navigate />
            <div className="container-fluid pt-5"style={{height:"100vh",backgroundColor:"#C62641"}}>
                <div className="row justify-content-center align-items-center">
                    <div className="col-md-8 col-12 mt-5">
                        <div className="title d-flex justify-content-center text-light"><h1>ADD POST</h1></div>
                            <div className="d-flex ms-auto justify-content-between text-light"></div>
                            <input  className="mt-2 mb-3" placeholder="Title" style={{ display: "block", width: "100%" }}onChange={(event) => setTitle(event.target.value) }/>
                            < ReactQuill className="bg-white" theme="snow" value={description} onChange={setDescription} />
                            <button className="btn w-100 mt-3 bg-success" type="submit" style={{color:"white"}} onClick={(event) => addpost (event)} >Add Post</button>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
export default AddPosts
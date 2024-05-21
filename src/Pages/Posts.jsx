import React, { useState, useEffect, } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useParams } from "react-router-dom";
import Navigate from "./Navigate";

function Posts() {
    const [data, setData] = useState([]);
    const { id } = useParams();
    const [commentValue, setCommentValue] = useState("");
    const [editing, setEditing] = useState(false);
    const [editDescription, setEditDescription] = useState("");
    const [editTitle, setEditTitle] = useState("");
    const navigate = useNavigate();


    useEffect(function () {
        axios.get("https://apitest.reachstar.io/blog/get/" + id).then(function (response) {
            setData(response.data);
            setEditDescription(response.data.description);
            setEditTitle(response.data.title)
        }).catch(function (error) {
            console.log(error);
        });
    }, [])
    const HandleEdit = () => {
        setEditing(true);
    };
    const handleSave = () => {
        axios.put("https://apitest.reachstar.io/blog/edit/" + id, {
            title: editTitle,
            description: editDescription
        }).then(function (response) {
            window.location.reload();
            setEditing(false);
        }).catch(function (error) {
            console.log("ar shesrulda!", error);
            window.location.reload();
        });
    };
    const AddComment = (event) => {
        event.preventDefault();
        axios.post("https://apitest.reachstar.io/comment/add/" + id, {
            comment: commentValue
        }).then(function (response) {
            window.location.reload();
        }).catch(function (error) {
            window.alert("ragaca veraris kargad")
        })
    };
    const DeleteComment = (commentId) => {
        axios.delete("https://apitest.reachstar.io/comment/delete/" + commentId, {
        }).then(function (response) {
            window.location.reload();
        }).catch(function (error) {
            window.alert("ver waishala komentari");
            window.location.reload();
        })
    };
    const DeleteBlog = (deleteBlogId) => {
        axios.delete("https://apitest.reachstar.io/blog/delete/" + deleteBlogId).then(function (response) {
            window.alert("ბლოგის წაშლა წარმატებით განხორციელდა!")
            navigate("/home");
        }).catch(function (error) {
            window.location.reload();
            window.alert("ბლოგის წაშლა ვერ მოხერხდა!")
        })

    }
    return (
        <React.Fragment>
            <Navigate />
            <div className="container-fluid" style={{ backgroundColor: "#C62641", }}>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-12 col-12">
                            <div className="card mt-5 bg-light p-5">
                                <div className=" d-flex justify-content-center mb-5" style={{ border: "1px solid black" }}>
                                    {
                                        editing ? (<input className="text-center" type="text" value={editTitle} onChange={(e) => setEditTitle(e.target.value)} />) :
                                            (
                                                <h3 className="post-title" dangerouslySetInnerHTML={{ __html: data.title }}></h3>
                                            )
                                    }
                                </div>
                                <div className="card-body text-center">
                                    {
                                        editing ? (< ReactQuill theme="snow" value={editDescription} onChange={setEditDescription} />) :

                                            (
                                                <p dangerouslySetInnerHTML={{ __html: data.description }}></p>
                                            )

                                    }
                                    <div className="buttons d-flex gap-1 t-1 mb-4">
                                        {
                                            editing ? (<button className="btn edit border-0 p-2 delete text-white" style={{ backgroundColor: "#C62641", height: "45px" }} onClick={(handleSave)} >Save</button>
                                            ) : (
                                                <div className="d-flex gap-3">
                                                    <button className="btn  text-white delete" style={{ fontFamily: "JosefinSans-SemiBold", backgroundColor: "#C62641" }} onClick={HandleEdit}>Edit Blog</button>
                                                    <button className="btn  text-white delete" style={{ fontFamily: "JosefinSans-SemiBold", backgroundColor: "#C62641" }} onClick={() => DeleteBlog(data.id)}>Delete Blog</button>
                                                </div>
                                            )}

                                    </div>
                                </div>
                                <div className="mt-5">
                                <form onSubmit={(event) => { AddComment(event) }}>
                                        < ReactQuill theme="snow" value={commentValue} onChange={setCommentValue} />
                                        <button type="submit" className="btn Add-comment bg-danger mt-5 delete text-white">Post Comment</button>
                                    </form>
                                    <h3 className="text-center mt-5">Comments</h3>
                                    <div className="p-3 mt-5">
                                        <div className="">
                                            {
                                                data.comments && data.comments.map((item, index) => (<div className="d-flex  align-items-center">
                                                    <p dangerouslySetInnerHTML={{ __html: item.comment }} key={index}>
                                                    </p><button stype="submit" className="btn delete ms-auto border-0" style={{ color: "red", height: "50px" }} onClick={() => DeleteComment(item.id)}>Delete</button>
                                                </div>))
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
export default Posts

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from 'axios';
import Login from './Pages/Login';
import Home from './Pages/Home';
import Signup from './Pages/Signup';
import Posts from './Pages/Posts';
import AddPosts from './Pages/AddPosts';
import Navigate from './Pages/Navigate';

function App() {
    return (
        <React.Fragment>
            <BrowserRouter>
                <Routes>
                    <Route index path="" element={<Login />}></Route>
                    <Route path="/Navigate" element={<Navigate/>}></Route>
                    <Route path="/Home" element={<Home />}></Route>
                    <Route path="/Signup"element={<Signup/>}></Route>
                    <Route index path="/Posts/:id" element={<Posts/>}></Route>
                    <Route path="/AddPosts" element={<AddPosts/>}></Route>
                </Routes>
            </BrowserRouter>
        </React.Fragment>
    );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);

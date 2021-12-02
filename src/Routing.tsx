import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error from "./Error";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home/Home";

const Routing = () => {

    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="*" element={<Error/>}/>
            </Routes>
            <Footer/>
        </BrowserRouter>
    )

}

export default Routing;
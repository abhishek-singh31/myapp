import React from "react";
import About from "./About.js"
import Details from "./Details.js";
import Footer from "./Footer.js"
import Image from "./Image.js"
export default function Background(){
    return (
        <div className="container">
            <Image/>
            <Details/>
            <About/>
            <Footer/>
        </div>
    )
}
import React from "react";
export default function Details(){
    return (
        <div className="details">
            <h3 className="name">Abhishek Singh</h3>
            <p className="profile">Frontend Developer</p>
            <a className="website" href="abhishek.website">abhishek.website</a>
            <div className="btn-container">
                <button className="email">
                    <i class="far fa-envelope"></i> 
                    Email
                </button>
                <button className="linkedin">
                    <i class="fab fa-linkedin"></i>
                    LinkedIn
                </button>
            </div>
        </div>
    )
}
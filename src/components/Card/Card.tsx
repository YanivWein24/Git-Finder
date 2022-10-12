import React from 'react'
import './Card.css'

const Card = () => {
    return (
    <div className="card">
        <div className="topSection">
            <div className="imageContainer">
                <img src='https://avatars.githubusercontent.com/u/97472180?v=4' alt="user image"></img>
            </div>
            <div className="infoContainer">
                <h1>Full Name</h1>
                <h2>@UserName</h2>
                <p>Joined 12/12/2012</p>
            </div>
        </div>
        <div className="middleSection">
            <p className="bio">Autodidact Full-Stack Developer. Always discovering something new and developing new skills.</p>
            <div className="reposAndFollowers">
                <div className="tableSection">
                    <p className="small">Repos</p>
                    <p className="bold">16</p>
                </div>
                <div className="tableSection">
                    <p className="small">Followers</p>
                    <p className="bold">1</p>
                </div>
                <div className="tableSection">
                    <p className="small">Following</p>
                    <p className="bold">2</p>
                </div>
            </div>
        </div>
        <div className="bottomContainer">
            <div className="row">
                <i className="fa-solid fa-location-dot"></i>
                <p>Israel</p>
            </div>
            <div className="row">
                <i className="fa-solid fa-link"></i>
                <p>yaniv-weinshtein.netlify.app/</p>
            </div>
            <div className="row">
                <i className="fa-brands fa-twitter"></i>
                <p>No Twitter Info</p>
            </div>
            <div className="row">
            <i className="fa-regular fa-building"></i>
                <p>No Company Info</p>
            </div>
        </div>
    </div>
    )
}

export default Card
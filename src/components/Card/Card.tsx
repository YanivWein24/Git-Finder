import React from "react";
import "./Card.css";
import { UserData } from "../../UserData";

const Card = ({ userData }: { userData: UserData }) => {
  return (
    <div className="card fade-in">
      <div className="topSection">
        <div className="imageContainer">
          <img src={userData.imageUrl} alt="user"></img>
        </div>
        <div className="infoContainer">
          <h1>{userData.name}</h1>
          <h2>@{userData.userName}</h2>
          <p>Joined {userData.joinedAt.slice(0, 10)}</p>
        </div>
      </div>
      <div className="middleSection">
        <p className="bio">{userData.bio}</p>
        <div className="reposAndFollowers">
          <div className="tableSection">
            <p className="small">Repos</p>
            <p className="bold">{userData.repos}</p>
          </div>
          <div className="tableSection">
            <p className="small">Followers</p>
            <p className="bold">{userData.followers}</p>
          </div>
          <div className="tableSection">
            <p className="small">Following</p>
            <p className="bold">{userData.following}</p>
          </div>
        </div>
      </div>
      <div className="bottomContainer">
        <div className="row">
          <i className="fa-solid fa-location-dot"></i>
          {userData.location ? (
            <p>{userData.location}</p>
          ) : (
            <p className="noInfo">No location Info</p>
          )}
        </div>
        <div className="row">
          <i className="fa-solid fa-link"></i>
          {userData.blog ? (
            <a href={userData.blog}>{userData.blog.slice(-1) === '/' ? userData.blog.slice(0, (userData.blog.length -1)) : userData.blog}</a>
            // using conditional to remove the '/' char at the end of the url (of existed)
          ) : (
            <p className="noInfo">No blog Info</p>
          )}
        </div>
        <div className="row">
          <i className="fa-brands fa-twitter"></i>
          {userData.twitter ? (
            <p>{userData.twitter}</p>
          ) : (
            <p className="noInfo">No Twitter Info</p>
          )}
        </div>
        <div className="row">
          <i className="fa-regular fa-building"></i>
          {userData.company ? (
            <p>{userData.company}</p>
          ) : (
            <p className="noInfo">No Company Info</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card
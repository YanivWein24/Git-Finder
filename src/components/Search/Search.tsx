import React, { useState } from "react";
import "./Search.css";

const Search = ({
  setUserData,
}: {
  setUserData: React.Dispatch<React.SetStateAction<any>>;
}) => {
  const [search, setSearch] = useState<string>("");

  const fetchData = () => {
    fetch(`https://api.github.com/users/${search}`)
      .then((res) => res.json())
      .then((data) =>
        setUserData({
          id: data.id ? data.id : -2, // -2 if user is not found
          name: data.name || "",
          userName: data.login || "",
          imageUrl: data.avatar_url || "",
          joinedAt: data.created_at || "",
          bio: data.bio || "",
          followers: data.followers || 0,
          following: data.following || 0,
          location: data.location || "",
          blog: data.blog || "",
          twitter: data.twitter_userName || "",
          company: data.company || "",
          repos: data.public_repos || 0,
          link: data.html_url || ""
        })
      )
      .then(() => setSearch(""));
  };

  return (
    <div className="search">
      <i className="fa-solid fa-magnifying-glass"></i>
      <input
        placeholder="Search Github Username..."
        onChange={(event) => {
          setSearch(event.target.value);
        }}
        onKeyDown={(event) =>
          event.key === "Enter" && search !== "" && fetchData()
        }
        value={search}
      ></input>
      <button onClick={() => search !== "" && fetchData()}>Search</button>
    </div>
  );
};

export default Search;

import React from "react";
import "./Repo.css";

const Repo = ({
  name,
  description,
  url,
  language,
  stars,
  watchers,
  forks,
}: {
  name: string;
  description: string;
  url: string;
  language: string;
  stars: number;
  watchers: number;
  forks: number;
}) => {
  return (
    <div className="repo">
      <p className="name">{name}</p>
      <p className="description">{description}</p>
      <p className="language">
        {language && <li>{language}</li>}
      </p>
      <div className="container">
        <div className="column">
          <i className="fa-solid fa-star" />
          <p className="tableContent">{stars}</p>
        </div>
        <div className="column">
          <i className="fa-solid fa-eye" />
          <p className="tableContent">{watchers}</p>
        </div>
        <div className="column">
          <i className="fa-solid fa-code-fork" />
          <p className="tableContent">{forks}</p>
        </div>
      </div>
      <a
        href={url}
        target="_blank"
        rel="noreferrer"
        aria-label="Link To Github"
      >
        Check out
      </a>
    </div>
  );
};

export default Repo;

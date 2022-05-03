import React from "react";
import { commit } from "../utils/commit";
import "../css/commit.css";

const Commit = () => {
  return (
    <div id="commit" className="container">
      <div className="commit_title">
        <h1>Our commitment</h1>
      </div>
      <div className="commitList">
        {commit.map((item, idx) => (
          <article key={idx} className="commit_item">
            <img src={item.image} alt="image" />
            <h3>{item.title}</h3>
            <p className="complementary">{item.complementary}</p>
            <p>{item.text}</p>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Commit;

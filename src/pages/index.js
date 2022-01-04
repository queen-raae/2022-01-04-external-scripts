import React from "react";
import {Link} from "gatsby";

const IndexPage = () => {
  return (
    <main>
      <header>
        <h1>
          <span role="img" aria-label="Red circle + women presenter emoji">
            🔴&nbsp;👩‍🏫&nbsp;
          </span>
          Third party scripts with Gatsby
          <span role="img" aria-label="Women presenter + red circle emoji">
            &nbsp;👩‍🏫&nbsp;🔴
          </span>
        </h1>
        <p>Live Screencast · 2022-01-04</p>
        <p>
          <Link to="tweet-page-react-helmet">React Helmet Example</Link>
          <br />
          <Link to="tweet-page-create-element">Create Element Example</Link>
        </p>
      </header>
    </main>
  );
};

export default IndexPage;

import React, {useEffect} from "react";

const TweetPageCreateElement = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://platform.twitter.com/widgets.js";
    document.head.appendChild(script);
    return () => {
      script.remove();
    };
  }, []);

  return (
    <main>
      <section>
        <blockquote class="twitter-tweet">
          <p lang="en" dir="ltr">
            🚨👩‍🏫 First Live Screencast later <br />
            today at 14:00 CET 👩‍🏫🚨
            <br />
            <br />
            👉 Third party scripts with{" "}
            <a href="https://twitter.com/hashtag/GatsbyJS?src=hash&amp;ref_src=twsrc%5Etfw">
              #GatsbyJS
            </a>
            <a href="https://t.co/AXzXM08Jzz">https://t.co/AXzXM08Jzz</a>{" "}
            <a href="https://t.co/gXcOb4Gk8A">https://t.co/gXcOb4Gk8A</a>
          </p>
          &mdash; Benedicte Raae 👑 (@raae){" "}
          <a href="https://twitter.com/raae/status/1478284881809612800?ref_src=twsrc%5Etfw">
            January 4, 2022
          </a>
        </blockquote>
      </section>
    </main>
  );
};

export default TweetPageCreateElement;

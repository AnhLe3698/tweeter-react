import React  from "react";
import Tweet from "./Tweet";

function TweetList() {
  const tweet = {
    avatar: "https://i.imgur.com/73hZDYK.png",
    firstName: "Isaac",
    lastName: "Newton",
    handle: "@SirIsaac",
    body: "If I have seen further it is by standing on the shoulders of giants",
    age: "10 days ago"
  };

  const tweet1 = {
    avatar: "https://i.imgur.com/73hZDYK.png",
    firstName: "Descartes",
    lastName: "",
    handle: "@rd",
    body: "Je pense , donc je suis",
    age: "10 days ago"
  };

  return (
    <section className="tweets">
        <Tweet {...tweet}/>
        <Tweet {...tweet1}/>
    </section>
  );
}

export default TweetList;
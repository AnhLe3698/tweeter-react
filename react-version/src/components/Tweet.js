import React  from "react";

function Tweet(tweet) {
  return(
    <article class="tweet">
          <header class="tweet--header">
            <img class="tweet--avatar" src={tweet.avatar}/>
            <h2 class="tweet--name">{tweet.firstName + ' ' + tweet.lastName}</h2>
            <small class="tweet--handle">{tweet.handle}</small>
          </header>

          <div class="tweet--body">
            <p>{tweet.body}</p>
          </div>

          <footer class="tweet--footer">
            <small class="footer--age">{tweet.age}<small>
                <span class="footer--actions">
                  <a href="#"><i class="fa fa-flag"></i></a>
                  <a href="#"><i class="fa fa-retweet"></i></a>
                  <a href="#"><i class="fa fa-heart"></i></a>'
                </span>
              </small></small></footer>
        </article>
  );
}

export default Tweet;
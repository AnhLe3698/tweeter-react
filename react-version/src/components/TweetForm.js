import React from 'react';

function TweetForm() {
  const plcHolder = "What are you humming about?";
  return (
    <h1>
      <section class="error-container"><i class="fas fa-exclamation-triangle"></i>
      <h4></h4> <i class="fas fa-exclamation-triangle"></i>
      </section>
      <section class="newtweet">
        <form method="post" action="/tweets" class="newtweet__form">
          <textarea class="form__textarea" name="text" placeholder={plcHolder}></textarea>
          <input type="submit" value="Tweet" class="form__input" />
          <span class="form__counter">140</span>
        </form>
      </section>
    </h1>
  );
}

export default TweetForm;
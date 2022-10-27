import React from 'react';

function TweetForm() {
  const plcHolder = "What are you humming about?";
  return (
    <h1>
      <section className="error-container"><i className="fas fa-exclamation-triangle"></i>
      <h4></h4> <i className="fas fa-exclamation-triangle"></i>
      </section>
      <section className="newtweet">
        <form method="post" action="/tweets" className="newtweet__form" onSubmit={(event) => event.preventDefault()}>
          <textarea className="form__textarea" name="text" placeholder={plcHolder}></textarea>
          <input type="submit" value="Tweet" className="form__input" />
          <span className="form__counter">140</span>
        </form>
      </section>
    </h1>
  );
}

export default TweetForm;
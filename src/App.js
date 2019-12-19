import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [quoteText, setQuoteText] = useState("");
  const [quoteAuthor, setQuoteAuthor] = useState("");

  useEffect(() => {
    // Get quote on load
    if (!quoteText && !quoteAuthor) getQuote();
  });

  async function getQuote() {
    const result = await fetch(
      "https://programming-quotes-api.herokuapp.com/quotes/random",
      {
        method: "GET"
      }
    );
    result
      .json()
      .then(response => {
        setQuoteText(response.en);
        setQuoteAuthor(response.author);
      })
      .catch(err => {
        console.error(err);
      });
  }

  return (
    <div className="App">
      <main id="quote-box">
        <section className="quote">
          <p id="text">{quoteText}</p>
          <span id="author">{quoteAuthor}</span>
        </section>
        <section className="quote-options">
          <button
            id="new-quote"
            className="quote-button"
            onClick={() => getQuote()}
          >
            New Quote
          </button>
          <a
            id="tweet-quote"
            href={encodeURI(
              'https://twitter.com/intent/tweet?text="' +
                quoteText +
                '"  - ' +
                quoteAuthor
            )}
            target="_blank"
            rel="noopener noreferrer"
          >
            Tweet quote
          </a>
        </section>
      </main>
    </div>
  );
}

export default App;

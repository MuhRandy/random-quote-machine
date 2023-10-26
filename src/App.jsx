import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useEffect } from "react";
import axios from "axios";

function App() {
  const [count, setCount] = useState(0);
  const [quote, setQuote] = useState([]);
  const url = "https://api.quotable.io/random";

  useEffect(() => {
    async function getQuotes() {
      const { data } = await axios(url);
      setQuote(data);
    }

    getQuotes();
  }, []);

  function handleClick() {
    console.log(quote);
  }

  return (
    <>
      <h1>{quote.content}</h1>
      <p>{quote.author}</p>
      <button onClick={handleClick}>Get Quote</button>
    </>
  );
}

export default App;

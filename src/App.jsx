import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import Card from './components/Card';

function App() {
  const [quote, setQuote] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const API_URL = 'https://api.quotable.io';

  const refresh = () => {
    axios
      .get(API_URL + '/random')
      .then((response) => {
        setQuote(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        setError(error.message);
      });
  };

  useEffect(refresh, []);

  return (
    <div className="flex justify-center items-center h-screen">
      <Card
        author={quote.author}
        content={quote.content}
        handleClick={refresh}
      />
    </div>
  );
}

export default App;

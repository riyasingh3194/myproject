import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchIcon from '@mui/icons-material/Search';
import './App.css';

function App() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (query.length >= 2) {
      setLoading(true);
      setError(null);
      axios
        .get('https://cdn-api.co-vin.in/api/v2/admin/location/states')
        .then(response => {
          const filteredResults = response.data.states.filter(state =>
            state.state_name.toLowerCase().includes(query.toLowerCase())
          );
          setResults(filteredResults);
          setLoading(false);
        })
        .catch(error => {
          console.error(error);
          setError('Failed to fetch data from the API.');
          setLoading(false);
        });
    } else {
      setResults([]);
    }
  }, [query]);

  const handleInputChange = event => {
    setQuery(event.target.value);
  };

  return (
    <nav className="search-nav">
      <div className="search-container">
        <input
          type="text"
          value={query}
          onChange={handleInputChange}
          placeholder="Search Google or Type a URL"
        />
        <SearchIcon className="search-icon" />
      </div>
      {query.length >= 2 && (
        <div className="search-results">
          {loading ? (
            <p>Loading...</p>
          ) : error ? (
            <p>{error}</p>
          ) : (
            <ul>
              {results.map(result => (
                <li key={result.state_id}>{result.state_name}</li>
              ))}
            </ul>
          )}
        </div>
      )}
    </nav>
  );
}

export default App;

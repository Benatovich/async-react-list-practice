import homer from './spinner.gif';
import './App.css';
import TheoriesList from './TheoriesList';
import fetchTheories from './services/fetch-utils.js';
import { useState, useEffect } from 'react';

function App() {
  const [theories, setTheories] = useState([]);
  const [isLoading, setLoading] = useState(false);
  
  async function fetchData() {
    setLoading(true);

    const data = await fetchTheories();

    setLoading(false);
    setTheories(data);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <TheoriesList theories={theories}/>
    </div>
  );
}

export default App;

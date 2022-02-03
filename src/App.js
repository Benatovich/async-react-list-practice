import homer from './spinner.gif';
import './App.css';
import TheoriesList from './TheoriesList';
import CandyList from './CandyList';
import { fetchTheories, fetchCandies, fetchColors, fetchRats } from './services/fetch-utils.js';
import { useState, useEffect } from 'react';

function App() {
  const [theories, setTheories] = useState([]);
  const [candies, setCandies] = useState([]);
  const [isLoading, setLoading] = useState(false);
  
  async function fetchData() {
    setLoading(true);

    const theoryData = await fetchTheories();
    const candyData = await fetchCandies();

    setLoading(false);
    setTheories(theoryData);
    setCandies(candyData);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <button onClick={fetchData}>Fetch Data</button>
      <div className='candy'>
        <h3>Candies</h3>
        {isLoading ? <img src={homer} /> : <CandyList candies={candies} />}
      </div>
      <div className='theories'>
        <h3>Conspiracy Theories</h3>
        {
          isLoading ? <img src={homer} /> : <TheoriesList theories={theories}/>
        }
      </div>
    </div>
  );
}

export default App;

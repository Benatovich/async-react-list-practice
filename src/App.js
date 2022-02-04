import homer from './spinner.gif';
import './App.css';
import TheoriesList from './TheoriesList';
import CandyList from './CandyList';
import PlanetsList from './PlanetsList';
import ColorList from './ColorList';
import { fetchTheories, fetchCandies, fetchColors, fetchPlanets } from './services/fetch-utils.js';
import { useState, useEffect } from 'react';

function App() {
  const [colors, setColors] = useState([]);
  const [theories, setTheories] = useState([]);
  const [candies, setCandies] = useState([]);
  const [planets, setPlanets] = useState([]);
  const [isLoading, setLoading] = useState(false);
  
  async function fetchData() {
    setLoading(true);

    const theoryData = await fetchTheories();
    const candyData = await fetchCandies();
    const planetData = await fetchPlanets();
    const colorData = await fetchColors();

    setLoading(false);
    setTheories(theoryData);
    setCandies(candyData);
    setPlanets(planetData);
    setColors(colorData);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <button onClick={fetchData}>Fetch Data</button>
      <div className='planets'>
        <h3>Planets</h3>
        {isLoading ? <img src={homer} /> : <PlanetsList planets={planets} />}
      </div>
      <div className='colors'>
        <h3>Colors</h3>
        {isLoading ? <img src={homer} /> : <ColorList colors={colors} />}
      </div>
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

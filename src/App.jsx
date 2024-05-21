import { fetchStarships, searchStarships } from './services/starshipService';
import StarshipSearch from './components/StarshipSearch.jsx';
import StarshipList from './components/StarshipList';
import { useEffect,useState } from 'react';



const App = () => {
  const [starships, setStarships] = useState([]);
  const [filteredStarships, setFilteredStarships] = useState([]);

  useEffect(() => {
    const loadStarships = async () => {
      const data = await fetchStarships();
      setStarships(data);
      setFilteredStarships(data);
    };
    loadStarships();
  }, []);


  const handleSearch = async (query) => {
    if (query) {
      const data = await searchStarships(query);
      setFilteredStarships(data);
    } else {
      setFilteredStarships(starships);
    }
  };

  return (
    <>
      <h1>List of Starships</h1>
      <StarshipSearch onSearch={handleSearch} />
      <StarshipList starships={filteredStarships} />
    </>
  );
};



export default App
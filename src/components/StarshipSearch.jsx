import { useState } from 'react';


const StarshipSearch = ({onSearch}) => {

    const [search, setSearch] = useState('');
    
    const handleSubmit = (event) => {
        event.preventDefault();
        onSearch(search);
        setSearch('');
    }

    const handleInputChange = (event) => {
        setSearch(event.target.value);
    };

    return (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={search}
            onChange={handleInputChange}
            placeholder="Enter Starship Name"
          />
          <button type="submit">Search</button>
        </form>
      );
    }

export default StarshipSearch;


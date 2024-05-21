const BASE_URL = 'https://swapi.dev/api/starships/';

export async function fetchStarships() {
  try {
    const response = await fetch(BASE_URL);
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error(error);
  }
}

export async function searchStarships(query) {
  try {
    const response = await fetch(`${BASE_URL}?search=${query}`);
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error('Search error:', error);
    
  }
}
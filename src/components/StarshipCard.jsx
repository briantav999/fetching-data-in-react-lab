import React from 'react';


const StarshipCard = ({ starship }) => {
    return (
        <div className="starshipCard">
            <h3>{starship.name}</h3>
            <p>Model: {starship.model}</p>
            <p>Class: {starship.starship_class}</p>
            <p>Manufacturer: {starship.manufacturer}</p>
            <br></br>
        </div>
    );
};

export default StarshipCard;